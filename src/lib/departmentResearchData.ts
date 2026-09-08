export interface ResearchDoc {
  title: string;
  url: string;
}

export interface DepartmentResearchInfo {
  mouUrl?: string;
  industrialProjectsUrl?: string;
  patentDetailsUrl?: string;
  publications: ResearchDoc[];
  fdps: ResearchDoc[];
}

export const DEPARTMENT_RESEARCH_DATA: Record<string, DepartmentResearchInfo> = {
  "computer-science-and-engineering": {
    mouUrl: "https://www.msajce-edu.in/images/departments/cse/MOUDetails.pdf",
    industrialProjectsUrl: "https://www.msajce-edu.in/images/departments/cse/IndustrialProjects.pdf",
    patentDetailsUrl: "https://www.msajce-edu.in/images/departments/cse/PatentDetails.pdf",
    publications: [
      { title: "Publication 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/cse/Publications2022-2023.pdf" },
      { title: "Publication 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/cse/CSEpublication2021-2022.pdf" },
      { title: "Publication 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/cse/CSEpublication2020-2021.pdf" },
      { title: "Publication 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/cse/CSEpublication2019-2020.pdf" },
    ],
    fdps: [
      { title: "AICTE-ATAL Sponsored Six Days FDP", url: "https://www.msajce-edu.in/images/departments/sh/events/AICTE-6DAYSFDP.pdf" },
      { title: "FDP 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/cse/FDP2022-2023(CSE).pdf" },
      { title: "FDP 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/cse/FDP2021-2022(CSE).pdf" },
      { title: "FDP 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/cse/FDP2020-2021.pdf" },
      { title: "FDP 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/cse/FDP2019-2020.pdf" },
      { title: "FDP 2018 - 2019", url: "https://www.msajce-edu.in/images/departments/cse/FDP2018-2019.pdf" },
      { title: "FDP 2017 - 2018", url: "https://www.msajce-edu.in/images/departments/cse/FDP2017-2018.pdf" },
      { title: "FDP 2016 - 2017", url: "https://www.msajce-edu.in/images/departments/cse/FDP2016-2017.pdf" },
    ]
  },
  "civil-engineering": {
    mouUrl: "https://www.msajce-edu.in/images/departments/civil/MOUDetails.pdf",
    industrialProjectsUrl: "https://www.msajce-edu.in/images/departments/civil/IndustrialProjects.pdf",
    patentDetailsUrl: "https://www.msajce-edu.in/images/departments/civil/PatentDetails.pdf",
    publications: [
      { title: "Publication 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/civil/Publications2022-2023.pdf" },
      { title: "Publication 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/civil/Publications2021-2022.pdf" },
    ],
    fdps: [
      { title: "AICTE-ATAL Sponsored Six Days FDP", url: "https://www.msajce-edu.in/images/departments/sh/events/AICTE-6DAYSFDP.pdf" },
      { title: "FDP 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/civil/FDP2022-2023.pdf" },
      { title: "FDP 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/civil/FDP2021-2022.pdf" },
    ]
  },
  "electronics-and-communication-engineering": {
    mouUrl: "https://www.msajce-edu.in/images/departments/ece/MOUDetails.pdf",
    industrialProjectsUrl: "https://www.msajce-edu.in/images/departments/ece/IndustrialProjects.pdf",
    patentDetailsUrl: "https://www.msajce-edu.in/images/departments/ece/PatentDetails.pdf",
    publications: [
      { title: "Publication 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/ece/Publications2022-2023.pdf" },
      { title: "Publication 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/ece/Publications2021-2022.pdf" },
      { title: "Publication 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/ece/Publications2019-2020.pdf" },
      { title: "Publication 2016 - 2018", url: "https://www.msajce-edu.in/images/departments/ece/Publications2016-2018.pdf" },
    ],
    fdps: [
      { title: "AICTE-ATAL Sponsored Six Days FDP", url: "https://www.msajce-edu.in/images/departments/sh/events/AICTE-6DAYSFDP.pdf" },
      { title: "FDP 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/ece/FDP2022-2023.pdf" },
      { title: "FDP 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/ece/FDP2021-2022.pdf" },
      { title: "FDP 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/ece/FDP2020-2021.pdf" },
      { title: "FDP 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/ece/FDP2019-2020.pdf" },
      { title: "FDP 2018 - 2019", url: "https://www.msajce-edu.in/images/departments/ece/FDP2018-2019.pdf" },
      { title: "FDP 2017 - 2018", url: "https://www.msajce-edu.in/images/departments/ece/FDP2017-2018.pdf" },
      { title: "FDP 2016 - 2017", url: "https://www.msajce-edu.in/images/departments/ece/FDP2016-2017.pdf" },
    ]
  },
  "electrical-and-electronics-engineering": {
    mouUrl: "https://www.msajce-edu.in/images/departments/eee/MOUDetails.pdf",
    industrialProjectsUrl: "https://www.msajce-edu.in/images/departments/eee/IndustrialProjects.pdf",
    patentDetailsUrl: "https://www.msajce-edu.in/images/departments/eee/PatentDetails.pdf",
    publications: [
      { title: "Publication 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/eee/Publications2022-2023.pdf" },
      { title: "Publication 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/eee/Publications2021-2022.pdf" },
      { title: "Publication 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/eee/Publications2019-2020.pdf" },
      { title: "Publication 2016 - 2018", url: "https://www.msajce-edu.in/images/departments/eee/Publications2016-2018.pdf" },
    ],
    fdps: [
      { title: "AICTE-ATAL Sponsored Six Days FDP", url: "https://www.msajce-edu.in/images/departments/sh/events/AICTE-6DAYSFDP.pdf" },
      { title: "FDP 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/eee/FDP2022-2023.pdf" },
      { title: "FDP 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/eee/FDP2021-2022.pdf" },
      { title: "FDP 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/eee/FDP2020-2021.pdf" },
      { title: "FDP 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/eee/FDP2019-2020.pdf" },
      { title: "FDP 2018 - 2019", url: "https://www.msajce-edu.in/images/departments/eee/FDP2018-2019.pdf" },
      { title: "FDP 2017 - 2018", url: "https://www.msajce-edu.in/images/departments/eee/FDP2017-2018.pdf" },
      { title: "FDP 2016 - 2017", url: "https://www.msajce-edu.in/images/departments/eee/FDP2016-2017.pdf" },
    ]
  },
  "mechanical-engineering": {
    mouUrl: "https://www.msajce-edu.in/images/departments/mech/MOUDetails.pdf",
    industrialProjectsUrl: "https://www.msajce-edu.in/images/departments/mech/IndustryProjects.pdf",
    patentDetailsUrl: "https://www.msajce-edu.in/images/departments/mech/Patents-Mech.pdf",
    publications: [
      { title: "Publication 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/mech/Publications2022-2023.pdf" },
      { title: "Publication 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/mech/Publications2021-2022.pdf" },
      { title: "Publication 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/mech/Publications2020-2021.pdf" },
      { title: "Publication 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/mech/Publications2019-2020.pdf" },
      { title: "Publication 2018 - 2019", url: "https://www.msajce-edu.in/images/departments/mech/Publications2018-2019.pdf" },
      { title: "Publication 2017 - 2018", url: "https://www.msajce-edu.in/images/departments/mech/Publications2017-2018.pdf" },
    ],
    fdps: [
      { title: "AICTE-ATAL Sponsored Six Days FDP", url: "https://www.msajce-edu.in/images/departments/sh/events/AICTE-6DAYSFDP.pdf" },
      { title: "FDP 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/mech/FDP2022-2023.pdf" },
      { title: "FDP 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/mech/FDP2021-2022.pdf" },
      { title: "FDP 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/mech/FDP2020-2021.pdf" },
      { title: "FDP 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/mech/FDP2019-2020.pdf" },
      { title: "FDP 2015 - 2016", url: "https://www.msajce-edu.in/images/departments/mech/FDP2015-2016.pdf" },
      { title: "FDP 2018 - 2019", url: "https://www.msajce-edu.in/images/departments/mech/FDP2018-2019.pdf" },
      { title: "FDP 2017 - 2018", url: "https://www.msajce-edu.in/images/departments/mech/FDP2017-2018.pdf" },
      { title: "FDP 2016 - 2017", url: "https://www.msajce-edu.in/images/departments/mech/FDP2016-2017.pdf" },
    ]
  },
  "information-technology": {
    mouUrl: "https://www.msajce-edu.in/images/departments/it/MOUDetails.pdf",
    industrialProjectsUrl: "https://www.msajce-edu.in/images/departments/it/IndustrialProjects.pdf",
    patentDetailsUrl: "https://www.msajce-edu.in/images/departments/it/PatentDetails.pdf",
    publications: [
      { title: "Publication 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/it/Publications2022-2023.pdf" },
      { title: "Publication 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/it/ITpublication2021-2022.pdf" },
      { title: "Publication 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/it/ITpublication2020-2021.pdf" },
      { title: "Publication 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/it/ITpublication2019-2020.pdf" },
    ],
    fdps: [
      { title: "AICTE-ATAL Sponsored Six Days FDP", url: "https://www.msajce-edu.in/images/departments/sh/events/AICTE-6DAYSFDP.pdf" },
      { title: "FDP 2022 - 2023", url: "https://www.msajce-edu.in/images/departments/it/FDP2022-2023(IT).pdf" },
      { title: "FDP 2021 - 2022", url: "https://www.msajce-edu.in/images/departments/it/FDP2021-2022(IT).pdf" },
      { title: "FDP 2020 - 2021", url: "https://www.msajce-edu.in/images/departments/it/FDP2020-2021(IT).pdf" },
      { title: "FDP 2019 - 2020", url: "https://www.msajce-edu.in/images/departments/it/FDP2019-2020.pdf" },
      { title: "FDP 2018 - 2019", url: "https://www.msajce-edu.in/images/departments/it/FDP2018-2019.pdf" },
      { title: "FDP 2017 - 2018", url: "https://www.msajce-edu.in/images/departments/it/FDP2017-2018.pdf" },
      { title: "FDP 2016 - 2017", url: "https://www.msajce-edu.in/images/departments/it/FDP2016-2017.pdf" },
    ]
  }
};

export function getDepartmentResearchData(slug: string): DepartmentResearchInfo {
  const fallback = DEPARTMENT_RESEARCH_DATA["computer-science-and-engineering"] as DepartmentResearchInfo;
  if (DEPARTMENT_RESEARCH_DATA[slug]) {
    return (DEPARTMENT_RESEARCH_DATA[slug] as DepartmentResearchInfo);
  }
  const s = slug.toLowerCase();
  if (s.includes('civil') || s.includes('structural')) {
    return (DEPARTMENT_RESEARCH_DATA["civil-engineering"] as DepartmentResearchInfo) || fallback;
  }
  if (s.includes('ece') || s.includes('electronics-and-communication') || s.includes('vlsi') || s.includes('act')) {
    return (DEPARTMENT_RESEARCH_DATA["electronics-and-communication-engineering"] as DepartmentResearchInfo) || fallback;
  }
  if (s.includes('eee') || s.includes('electrical')) {
    return (DEPARTMENT_RESEARCH_DATA["electrical-and-electronics-engineering"] as DepartmentResearchInfo) || fallback;
  }
  if (s.includes('mech') || s.includes('mechanical')) {
    return (DEPARTMENT_RESEARCH_DATA["mechanical-engineering"] as DepartmentResearchInfo) || fallback;
  }
  if (s.includes('it') || s.includes('information-technology')) {
    return (DEPARTMENT_RESEARCH_DATA["information-technology"] as DepartmentResearchInfo) || fallback;
  }
  return fallback;
}
