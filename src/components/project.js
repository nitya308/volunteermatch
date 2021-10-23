//Array storing details of work oppurtunities
const Projects = [
    {
      name: "Share a Square",
      descp: "An initiative that aims to provide hand-made blankets to the homeless for the winter by collecting crocheted and knitted sqaures. You can volunteer to make squares, teach or fundraise!",
      interest: "Art",
      skill:"FineArts",
      requirements: 1,
      contactlink: "https://www.instagram.com/share.a.square/",
      contact:"@share.a.square"
    },

    {
      name: "VidyaVerse",
      descp: "A non-proft dedicated to making quality science education available for children from low-income backgrounds. They aim to foster interest in STEM while creating a lifelong curiosity to learn beyond the classroom",
      interest: "Education",
      skill: "Teaching",
      requirements: 1,
      contactlink: "http://www.vidyaverse.org/contact/",
      contact:"www.vidyaverse.org"
    },

    {
      name: "Ration Square",
      descp: "A mission to provide ration kits to the ones affected most by the current pandemic",
      interest: "Covid_Relief",
      skill: "Fundraising",
      requirements: 5,
      contactlink: "https://www.rationsquare.com/",
      contact:"www.rationsquare.com"
    },

    {
      name: "Elysian",
      descp: "A place where art is used to make a difference. They sell hand-painted masks, art pieces and have workshops to raise money for social causes.",
      interest: "Art",
      skill: "FineArts",
      requirements: 3,
      contactlink: "https://www.instagram.com/elysian.artstore/",
      contact:"@elysian.artstore"
    },

    {
      name: "Paintbrush Tales",
      descp: "An initiative that aims to provide hand-made blankets to the homeless for the winter by collecting crocheted and knitted sqaures. You can volunteer to make squares, teach or fundraise!",
      interest: "Art",
      skill: "FineArts",
      requirements: 5,
      contactlink: "https://www.paintbrushtales.com/contact",
      contact:"Paintbrush Tales"
    },

    {
      name: "Evolv",
      descp: "Bringing unbiased news stories to educate people through simple, innovative write-ups on national and international stories",
      interest: "News",
      skill: "Writing",
      requirements: 7,
      contactlink: "https://www.instagram.com/evolvideas/",
      contact:"@evolvideas"
    },

    {
      name: "Juxtapost",
      descp: "A student run e-magazine featuring a wide variety of themes. You can write articles, stories or poems for them or even be feautured on their podcast if you have a story to tell!",
      interest: "Creative_Writing",
      skill: "Writing",
      requirements: 1,
      contactlink: "https://www.instagram.com/juxtapostmag/",
      contact:"@juxtapostmag"
    },

    {
      name: "EconSmith",
      descp: "A platform for economics /business students to express their thoughts and ideas. Write social science articles for a global audience!",
      interest: "News",
      skill: "Writing",
      requirements: 1,
      contactlink: "https://econsmith.com/author-guidelines/",
      contact:"EconSmith journal"
    },

    {
      name: "CRY India",
      descp: "A Child Rights non-profit committed to ensuring a safe, secure and happy childhood for all children. They are looking for volunteers to help students continue their education virtually during covid.",
      interest: "Education",
      skill: "Teaching",
      requirements: 1,
      contactlink: "https://www.cry.org/volunteer-with-cry",
      contact:"CRY India"
    },

    {
      name: "MentalX",
      descp: "A safe space for mental health discussions and raising awarness with the goal of destigmatization. You can join their campiagn by designing posts to spread their message.",
      interest: "Health",
      skill: "GraphicDesign",
      requirements: 1,
      contactlink: "https://www.instagram.com/mental.cross/",
      contact:"@mental.cross"
    },

    {
      name: "Cup for Change",
      descp: "Promoting sustainable menstruation & menstrual equity and inclusivity in India one cup at a time. You can help them raise awareness for women's health by joining their team of writers.",
      interest: "Health",
      skill: "Writing",
      requirements: 1,
      contactlink: "https://www.instagram.com/cupforchange/",
      contact:"@cupforchange"
    }
  ];

  export function filterInterests(filters) {
    const res =  Projects.filter((p) => {
        if (!filters['interests'].includes(p.interest)) return false
        if (!filters['skills'].includes(p.skill)) return false
        if (p.requirements > parseInt(filters['time'])) return false
        return true
    })
    return res
  };