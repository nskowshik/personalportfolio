const PROFILE_INFO = {
  name: "𝕂𝕠𝕨𝕤𝕙𝕚𝕜 𝕊𝕦𝕕𝕒𝕣𝕤𝕒𝕟",
  about: "An entusiastic frontend developer, Electrical engineering graduate. Passionated in developing modularised code. Connect to discuss, ready to learn more together..."
}

const PAGES = [
  {
    name: "Intro",
    id: "intro",
    direction: "down"
  },
  {
    name: "Careers",
    id: "careers",
    direction: "down"
  },
  {
    name: "Footer",
    id: "footer",
    direction: "up"
  }
]

const WORK_EXPERIANCE = [
  {
    companyName: "Superops.ai",
    designation: "Frontend developer",
    startDate: "13 Feb 2022",
    endDate: null,
    isPresent: true,
    logo: {
      url: "/image/superops.png",
      width: "50px",
      height: "50px"
    },
    projects: ['Design System', 'Reporting module', 'Integrations', 'Asset management']
  },
  {
    companyName: "Gove Enterprises",
    designation:"Software engineering - Frontend" ,
    startDate: "15 June 2020",
    endDate: "29 Jan 2022",
    isPresent: false,
    logo: {
      url: "/image/gove.png",
      width: "70px",
      height: "45px"
    },
    projects: ['Vehicle management', 'Billing management', 'SQL Developement']
  }
]

export {
  PROFILE_INFO,
  WORK_EXPERIANCE,
  PAGES
}
