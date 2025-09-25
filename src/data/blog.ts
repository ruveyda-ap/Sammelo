import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Perfect Pour Over: A Step-by-Step Guide',
    excerpt: 'Master the art of pour-over coffee brewing with our comprehensive guide. Learn the techniques that will elevate your morning cup.',
    content: `
# The Perfect Pour Over: A Step-by-Step Guide

Pour-over coffee brewing is both an art and a science. When done correctly, it produces a clean, bright cup that highlights the unique characteristics of your coffee beans.

## What You'll Need

- Pour-over dripper (V60, Chemex, or similar)
- Paper filters
- Gooseneck kettle
- Coffee scale
- Timer
- Freshly ground coffee beans

## Step-by-Step Instructions

### 1. Heat Your Water
Heat water to 195-205°F (90-96°C). If you don't have a thermometer, bring water to a boil and let it sit for 30 seconds.

### 2. Rinse the Filter
Place the filter in your dripper and rinse with hot water. This removes any papery taste and preheats your brewing vessel.

### 3. Measure and Grind
Use a 1:16 ratio (1g coffee to 16g water). For a single cup, try 25g coffee to 400g water. Grind your beans to a medium-fine consistency.

### 4. The Bloom
Add twice the weight of water as coffee (50g water for 25g coffee). Stir gently and wait 30-45 seconds for the coffee to "bloom."

### 5. Continue Pouring
Pour in slow, circular motions, keeping the water level consistent. Total brew time should be 4-6 minutes.

### 6. Enjoy
Your perfect pour-over is ready! Take a moment to appreciate the aroma before your first sip.

## Pro Tips

- Use freshly roasted beans (within 2-4 weeks of roast date)
- Invest in a good grinder for consistent particle size
- Practice your pouring technique
- Keep notes on what works best for different beans

Happy brewing!
    `,
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Chen',
    publishedAt: '2024-01-15',
    readTime: 5,
    tags: ['brewing', 'pour-over', 'technique', 'guide']
  },
  {
    id: '2',
    title: 'Understanding Coffee Origins: A Journey Around the World',
    excerpt: 'Explore the diverse flavors and characteristics of coffee from different regions. Discover what makes each origin unique.',
    content: `
# Understanding Coffee Origins: A Journey Around the World

Coffee is grown in over 70 countries around the world, each producing beans with unique flavor profiles influenced by climate, soil, and processing methods.

## Major Coffee Regions

### Central and South America
Known for balanced, clean cups with bright acidity and chocolate notes.

**Notable Origins:**
- Colombia: Well-balanced with caramel sweetness
- Guatemala: Full-bodied with spicy complexity
- Costa Rica: Bright acidity with citrus notes

### Africa
The birthplace of coffee, offering complex, wine-like flavors.

**Notable Origins:**
- Ethiopia: Floral, tea-like, with fruit notes
- Kenya: Bright acidity with black currant flavors
- Rwanda: Clean, sweet, with red fruit characteristics

### Asia-Pacific
Earthy, full-bodied coffees with unique processing methods.

**Notable Origins:**
- Indonesia: Earthy, herbal, full-bodied
- Papua New Guinea: Rich, complex, wine-like
- Hawaii: Smooth, mild, with nutty undertones

## Factors Affecting Flavor

### Altitude
Higher altitudes produce denser beans with more complex flavors due to slower maturation.

### Processing Method
- **Washed**: Clean, bright flavors
- **Natural**: Fruity, wine-like characteristics
- **Honey**: Sweet, balanced profile

### Soil and Climate
Volcanic soil, rainfall patterns, and temperature variations all contribute to the final cup profile.

## Choosing Your Origin

Consider your taste preferences:
- **Bright and acidic**: African coffees
- **Balanced and smooth**: Central American
- **Full-bodied and earthy**: Asian coffees

Experiment with different origins to discover your favorites!
    `,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marcus Rodriguez',
    publishedAt: '2024-01-10',
    readTime: 7,
    tags: ['origins', 'flavor', 'geography', 'education']
  },
  {
    id: '3',
    title: 'Espresso Fundamentals: Dialing in the Perfect Shot',
    excerpt: 'Learn the essential techniques for pulling consistent, delicious espresso shots. Master the variables that matter most.',
    content: `
# Espresso Fundamentals: Dialing in the Perfect Shot

Espresso is the foundation of many coffee drinks, and mastering it requires understanding the key variables that affect extraction.

## The Golden Ratio

A standard espresso shot uses:
- **Dose**: 18-20g of coffee
- **Yield**: 36-40g of liquid espresso
- **Time**: 25-30 seconds

## Key Variables

### Grind Size
The most important variable. Start with a fine grind and adjust:
- Too coarse = under-extracted, sour
- Too fine = over-extracted, bitter

### Dose
The amount of coffee in your portafilter. Consistency is key.

### Distribution and Tamping
Even distribution and consistent tamping pressure (30lbs) ensure uniform extraction.

### Water Temperature
Ideal range: 200-204°F (93-96°C)

## Dialing In Process

1. **Start with recipe**: 20g in, 40g out, 30 seconds
2. **Taste and adjust grind**: 
   - Sour? Grind finer
   - Bitter? Grind coarser
3. **Fine-tune dose and yield** once grind is dialed
4. **Document your settings** for consistency

## Common Problems

### Channeling
Uneven extraction causing fast, weak shots.
**Solution**: Better distribution and tamping

### Slow Shots
Over 35 seconds extraction time.
**Solution**: Coarser grind or less dose

### Fast Shots
Under 20 seconds extraction time.
**Solution**: Finer grind or more dose

## Practice Makes Perfect

Keep a brewing log and taste everything. The more you practice, the better you'll understand how each variable affects the final cup.

Remember: great espresso is about balance, not perfection!
    `,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Elena Vasquez',
    publishedAt: '2024-01-05',
    readTime: 6,
    tags: ['espresso', 'technique', 'brewing', 'fundamentals']
  }
];