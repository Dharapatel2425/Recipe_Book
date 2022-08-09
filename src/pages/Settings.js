import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect } from 'react';

function Settings(props) {
    const [theme, setTheme] = useState("light");
    const [primarycolor, setPrimarycolor] = useState(0);
    const [fontsize, setFontsize] = useState(1);
    const [animationspeed, setAnimationspeed] = useState(1);
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    });
    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ];
    const primaryColors = [
        "rgb(255,0,86)",
        "rgb(33,150,243)",
        "rgb(255,193,7)",
        "rgb(0,200,83)",
        "rgb(156,39,176)"
    ];
    const fontsizes = [
        {
            title:"Small",
            value:"12px"
        },
        {
            title:"Medium",
            value:"16px"
        },
        {
            title:"Large",
            value:"20px"
        }
    ];
    const speeds = [
        {
            title:"Slow",
            value:"2"
        },
        {
            title:"Medium",
            value:"1"
        },
        {
            title:"Fast",
            value:".5"
        }
    ];

    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
    }, [settings])
    
    function changeTheme(i){
        const _theme = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

    function changeColor(i){
        const _color = primaryColors[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPrimarycolor(i)
        setSettings(_settings) 
    }

    function changeFontSize(i){
        const _size = fontsizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontsize(i)
        setSettings(_settings)
    }

    function changeAnimationSpeed(i){
        let _speed = speeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationspeed(i)
        setSettings(_settings)
    }
    return (
        <div>
            <div className='section d-block'>
                <h2> Preferred Theme</h2>
                <div className='option-container'>
                    <div className='option light'  onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className='check'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className='option dark'  onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className='check'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='section d-block'>
                <h2> Primary Color</h2>
                <div className='option-container'>
                     {primaryColors.map((color, index) => (
                    <div key={index} className='option light' style={{backgroundColor:color}} 
                    onClick={() => changeColor(index)} >
                        {primarycolor === index && (
                            <div className='check'>
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            <div className='section d-block'>
                <h2>Font Size </h2>
                <div className='option-container'>
                    {fontsizes.map((size, index) => (
                    <button key={index} className="btn" onClick={() => changeFontSize(index)}>
                        <span className='size_title' >{size.title}</span>
                        {fontsize === index && 
                            <span className='facheck'><FontAwesomeIcon icon={faCheck}/></span>
                        }
                    </button>
                    ))}
                </div>
            </div>
            <div className='section d-block'>
                <h2>Animation Speed</h2>
                <div className='option-container'>
                    {speeds.map((speed, index) => (
                    <button key={index} className="btn" onClick={() => changeAnimationSpeed(index)}>
                        <span className='speed_title' >{speed.title}</span>
                        {animationspeed === index && 
                            <span className='facheck'><FontAwesomeIcon icon={faCheck}/></span>
                        }
                    </button>
                    ))}
                </div>
            </div>

        </div>

    );
}

export default Settings;