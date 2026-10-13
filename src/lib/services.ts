import type { StaticImageData } from "next/image"
import stormDamage from "../../public/images/storm_damage.jpeg"
import treeRemoval from "../../public/images/ory_climbing.jpg"
import treeTrim from "../../public/images/tree_trim.jpg"
import stumpGrinder from "../../public/images/stump_grinder.jpg"

export type Service = {
    slug: string
    title: string
    /** one line for cards */
    summary: string
    image: StaticImageData
    alt: string
    /** page <h1> and <title> */
    headline: string
    intro: string
    body: string[]
    included: string[]
    faqs: { question: string; answer: string }[]
}

// Draft copy for client review. Avoid adding claims (response times,
// certifications, guarantees) the business hasn't confirmed.
export const services: Service[] = [
    {
        slug: "storm-damage-cleanup",
        title: "Storm Damage Cleanup",
        summary: "Fallen trees and broken limbs cleared safely, with the equipment to handle the big jobs.",
        image: stormDamage,
        alt: "Large tree fallen across a house after a storm",
        headline: "Storm Damage Cleanup in Southern Indiana",
        intro: "When a storm brings down trees or limbs, we have the crew and equipment to clear it safely, including trees on houses, garages, fences and driveways.",
        body: [
            "Storm damage is our specialty. Trees that have been uprooted, split or left leaning are under stress and can shift without warning, so they should be handled by an experienced, fully insured crew.",
            "We remove what has fallen, take care of hazardous hanging limbs and split trunks left standing, and clean up the debris so you can get back to normal.",
        ],
        included: [
            "Fallen tree and limb removal",
            "Trees on homes, garages and fences",
            "Hanging limbs and split trunks",
            "Debris cleanup and hauling",
            "Stump grinding afterwards if needed",
        ],
        faqs: [
            {
                question: "Can you remove a tree that has fallen on my house?",
                answer: "Yes. We lift and cut trees off structures in a controlled way to avoid causing more damage. Stay clear of the tree and call us as soon as it's safe to do so.",
            },
            {
                question: "Will my insurance cover storm cleanup?",
                answer: "That depends on your policy. We're happy to provide a written estimate you can share with your insurance company.",
            },
            {
                question: "Is a tree that started leaning after a storm dangerous?",
                answer: "It can be. A new lean, cracked soil or roots lifting at the base are signs the tree may be unstable. Keep people and pets away from it and let us take a look.",
            },
        ],
    },
    {
        slug: "tree-removal",
        title: "Tree Removal",
        summary: "Dead, damaged or unwanted trees taken down carefully, even in tight backyards.",
        image: treeRemoval,
        alt: "Climber and grapple saw truck removing a backyard tree",
        headline: "Tree Removal in Southern Indiana",
        intro: "Dead, dying, damaged or just in the way, we take trees down safely, even when they're close to homes, decks and fences.",
        body: [
            "Removing a large tree near a house takes planning. When space is tight we take trees down in sections, so nothing lands where it shouldn't.",
            "Once the tree is down we clean up the brush and wood, and we can grind the stump so the area is ready to use again.",
        ],
        included: [
            "Full tree removal",
            "Sectional removal in tight spaces",
            "Dead and hazardous trees",
            "Brush and debris cleanup",
            "Optional stump grinding",
        ],
        faqs: [
            {
                question: "How much does tree removal cost?",
                answer: "It depends on the size of the tree, where it is, how easy it is to reach and what's around it. We'll come take a look and give you a free estimate.",
            },
            {
                question: "Do you grind the stump too?",
                answer: "We can. Stump grinding can be added to any removal, or you can leave the stump if you prefer.",
            },
            {
                question: "Should I remove a dead tree right away?",
                answer: "Dead trees get brittle over time and can drop limbs or fall without much warning. If one is near your home, driveway or play area, it's best removed sooner rather than later.",
            },
        ],
    },
    {
        slug: "tree-trimming",
        title: "Tree Trimming",
        summary: "Pruning and shaping to keep your trees healthy and clear of your home.",
        image: treeTrim,
        alt: "Large untrimmed tree in a yard",
        headline: "Tree Trimming in Southern Indiana",
        intro: "Regular trimming keeps your trees healthy, safe and looking their best, and keeps limbs off your roof, gutters and driveway.",
        body: [
            "We remove dead, broken and crossing branches, thin out crowded canopies and raise low limbs for clearance over lawns, driveways and roofs.",
            "Good pruning now can also prevent storm damage later by taking weight off weak or overextended limbs.",
        ],
        included: [
            "Dead and broken limb removal",
            "Canopy thinning",
            "Clearance from roofs and buildings",
            "Raising low limbs",
            "Debris cleanup",
        ],
        faqs: [
            {
                question: "When is the best time to trim trees?",
                answer: "Many trees are best pruned while dormant, from late fall through winter. Dead or hazardous limbs can be removed any time of year.",
            },
            {
                question: "Will trimming hurt my tree?",
                answer: "Not when it's done right. We make clean cuts in the right places and avoid taking off too much at once.",
            },
            {
                question: "Can you trim branches hanging over my roof?",
                answer: "Yes. Limbs over roofs and gutters are one of the most common reasons people call us.",
            },
        ],
    },
    {
        slug: "stump-grinding",
        title: "Stump Grinding",
        summary: "Leftover stumps ground down so your yard looks like they were never there.",
        image: stumpGrinder,
        alt: "Stump grinder working on a tree stump",
        headline: "Stump Grinding in Southern Indiana",
        intro: "Tired of mowing around an old stump? We grind stumps down below ground level so you can get your yard back.",
        body: [
            "Our stump grinder turns the stump and its main surface roots into wood chips, leaving the area ready for grass, landscaping or a new tree.",
            "Stump grinding can be added to any tree removal, or booked on its own for stumps that have been sitting for years.",
        ],
        included: [
            "Grinding below ground level",
            "Surface root grinding",
            "Single or multiple stumps",
            "Add-on to any tree removal",
        ],
        faqs: [
            {
                question: "Can you grind a stump from a tree someone else removed?",
                answer: "Yes. Old stumps, new stumps, and stumps left behind by another company are all fine.",
            },
            {
                question: "What happens to the wood chips?",
                answer: "Let us know what you'd like. Chips can be left to fill the hole, or cleared so you can add topsoil and seed.",
            },
            {
                question: "Will the stump grow back?",
                answer: "Some trees send up sprouts from leftover roots for a while after grinding. Mowing them down usually stops them within a season.",
            },
        ],
    },
]

export function getService(slug: string) {
    return services.find((service) => service.slug === slug)
}
