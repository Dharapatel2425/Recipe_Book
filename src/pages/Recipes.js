import React from 'react';
import PreviousSearche from '../components/PreviousSearche';
import RecipeCards from '../components/RecipeCards';


function Recipes() {
    const recipes = [
        {
            title: "Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            desc:"Combine the warm water with the yeast in a jug and leave to one side  involved and knead on a floured surface for 10 minutes. add the filling on top.Spoon in some tomato sauce, scatter over the finely sliced red onion, artichoke hearts and wilted spinach. Tear up some mozzarella and grate over plenty of Parmesan with a pinch of chilli flakes.Transfer the pan pizza to the grill after 3 minutes on the hob for about the same length of time.Serve IT!"
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            desc:"Soak toast in a little lukewarm water.Cook pepper, shallot and garlic in 1 tablespoon hot oil until translucent.Shape mixture into small meatballs with wet hands.Cook the pasta in plenty of salted boiling water until al dente.Rinse, trim and dice zucchini. Rinse and halve pepper, then remove seeds and ribs and cut into small cubes. Peel bottom third of asparagus. Cut asparagus into small pieces. In a pan, sauté vegetables in hot oil, 1-2 minutes."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
            desc:"In a large bowl, mix ground beef, onion powder without pressing too hard.When burgers lift up easily, flip, add two slices of cheese to each, close lid if using a grill, and cook on the other side for another 2-3 minutes for medium to medium rare.Remove burgers with a sturdy metal spatula and transfer to a plate. Allow to rest for several minutes, then transfer to buns.Garnish as desired and serve immediately."
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            desc:"This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces."
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            desc:"Place the seaweed on a bamboo mat, then cover the sheet of seaweed with an even layer of prepared sushi rice. Smooth gently with the rice paddle.Layer salmon, cream cheese, and avocado on the rice, and roll it up tightly. Slice with a sharp knife, and enjoy with soy sauce."
        },
        {
            title: "Inidan Dosa",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            desc:"Wash and soak raw rice, urad dal and fenugreek seeds in Let it ferment overnight. Adjust batter consistency adding water. Make small, thick dosa.Drizzle oil over the dosa and cook one side.Flip it and cook the other side. Sprinkle few drops of water over the dosa to make it soft. Remove and keep it in a plate.Make the second dosa in the same way and stack it. Cover with a plate.Pack in a lunch box or for travel after dosa becomes warm."
        }, 
        {
            title: "Pasta",
            image: "/img/gallery/img_3.jpeg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            desc: "Cook 1lb/500g of dried spaghetti (or any other long dried pasta) in a large pot prepare one of the sauces below. When pasta is ready, scoop out 1 cup of pasta cooking water, and drain pasta.Add pasta into chosen sauce with 3/4 cup pasta cooking water. Toss pasta until sauce thickens and sticks to pasta (called 'emulsifying' the sauce), 1 - 2 minutes. Use more pasta water if needed to loosen sauce.Season with salt and pepper to taste."
        },
        {
            title: "Fruit Custard",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            desc:"In a microwave safe jug heat the milk on HIGH (100%) for 90 seconds and then stir. Microwave for another 90 seconds.In a separate bowl, beat the eggs, sugar and vanilla together. Gently whisk warmed milk into the egg mixture. Stirring all the time, strain this mix into a 2 litre microwave dish and sprinkle with cinnamon.Cook in microwave on MEDIUM (50%) for 4 minutes. Stir and then cook on MEDIUM (50%) for another 5 minutes."
        },
        {
            title: "Chocolate Cake",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            desc:"stir or whisk together sugar, flour, cocoa, baking powder, baking soda, and salt until evenly combined.Add the eggs, milk, oil, and vanilla. Mix on medium speed for about two minutes. Stir in boiling water. Don't worry if the batter seems a little thin, as reviewers say that's perfectly normal.Pour the cake batter into prepared pans. Bake for about half an hour, until a toothpick comes out clean when inserted in the middle."
        },
        {
            title: "Pad Thai",
            image: "/img/gallery/img_9.jpeg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            desc:"In a large pot of salted boiling water, cook noodles until al dente. Drain.In a small bowl, whisk together lime juice, brown sugar, fish sauce, soy sauce, and cayenne pepper. Set aside.In a large nonstick pan over medium-high heat, heat oil. Add bell pepper and cook until tender, about 4 minutes. Stir in garlic and cook until fragrant, about 1 minute more. Add the shrimp and season with salt and pepper. Cook until pink, about 2 minutes per side."
        },
        {
            title: "Cookies",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
            desc:"STEP 1:Heat the oven to 190C/170C fan/gas 5. Cream the butter in a large bowl with a wooden spoon or in a stand mixer until it is soft. Add the sugar and keep beating until the mixture is light and fluffy. Sift in the flour and add the optional ingredients, if you’re using them. Bring the mixture together with your hands in a figure-of-eight motion until it forms a dough. You can freeze the dough at this point.STEP 2: Roll the dough into walnut-sized."
        },
        {
            title: "Pani Puri",
            image: "/img/gallery/img_12.jpeg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            desc:"Pani puri is a sort of snack that originated in India and is one of the country's most popular street meals. It is made up of a hollow puri (a deep-fried crisp flatbread) that is filled with flavoured water (imli pani), tamarind chutney, chilli powder, chaat masala, potato mash, onions, or chickpeas. Pani puri/Gol Gappa is considered the forerunner of chaat. Chaat originated in the Northern Indian region of what is now Uttar Pradesh"
        }
    ].sort(() => Math.random() - 0.5)

 return (
    <div>
        <PreviousSearche/>
        <div className='recipes-container'>
            {recipes.map((recipe,index) => (
                 <RecipeCards key={index} recipe={recipe}/>
            ))}
        </div>
        
    </div>
        
    );
}

export default Recipes;