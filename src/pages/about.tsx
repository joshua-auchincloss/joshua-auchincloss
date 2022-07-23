import ListBox from "../components/ListBox";
const AboutMe = () => {
  return (
    <div class="grid px-4 py-6 space-y-6 content-center grid-cols-3">
      <div class="place-self-center md:col-span-2 col-span-3">
        <h2 class="font-medium text-xl -my-2">Career</h2>
        <div class="grid grid-flow-col grid-cols-2 place-items-center p-3 justify-center space-y-3 space-x-2 col-span-1">
          <div class="grid col-span-1 row-span-3 place-items-center justify-self-end">
            <span class="text-slate-500 font-thin py-2 row-span-1 text-center">
              {" "}
              Nov 2021 - Present
            </span>
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQHlxkWpWHqHEw/company-logo_100_100/0/1656666799305?e=1666224000&v=beta&t=dSbimu697CJvyCOHr0zha7wiNPnbYoohKWvCBgn6s90"
              class="w-12 h-12 rounded-full "
            />{" "}
            <span class="inline text-center py-2">Toronto, Canada</span>
          </div>
          <div class="grid justify-self-start place-items-center p-3 col-span-1">
            <h2 class="font-medium text-center pb-3 col-span-2 row-span-1">
              KYC / CDD Analyst, Automations Efficiencies
            </h2>
            <span class="float-right text-center col-span-2 ">
              Royal Bank of Canada, Investor & Treasury Services
            </span>
          </div>
        </div>
        <p class="my-5 text-left text-slate-700 px-3">
          <span class="text-black text-ellipsis ">
            Utilization of _________{" "}
          </span>{" "}
          &middot Python (Programming Language) &middot Machine Learning &middot
          Natural Language Processing (NLP) &middot Optical Character
          Recognition (OCR) &middot C &middot C++ &middot Cython &middot
          JavaScript &middot TypeScript &middot Angular &middot Bootstrap
          &middot React &middot Tailwind &middot Haskell &middot Ruby &middot
          Swift (Programming Language) &middot Artificial Intelligence (AI)
          &middot Distributed Systems &middot REST APIs{" "}
        </p>
        <p class="my-5 text-left text-slate-700 sm:pr-4 px-3">
          <span class="text-black text-ellipsis">For _________ </span> &middot
          Perpetual KYC Solutions &middot Data Analysis &middot Data Modeling
          &middot Data Management &middot Data Migration &middot Data
          Visualization &middot Anti-Money Laundering &middot CDD Risk
          Monitoring &middot Economic Sanctions &middot Financial Analysis
          &middot KYC Verification &middot Regulatory Compliance &middot SQL
        </p>
        <div class="col-span-2">
          <h2 class="font-medium text-xl my-5">Summary</h2>
          <p class="px-3">
            My professional experiences have been focused in developing
            full-service AML Due Diligence tooling for Domestic and Foreign
            Banks, Corporations, and Broker Dealers (entities). I have developed
            and extended systems to source and present legal entity information
            through use of extensive custom industry specific analytics,
            reporting, and evaluation systems to monitor, provide insights, and
            meet regulatory compliance requirements. The systems I have built
            are specialized to AML and regulatory compliance procedures; from
            open-source AML detection, distributed data systems collection and
            monitoring, to live document collection parsing and annotation.
            During my experiences working within the global financial services
            sector, I have focused my skills and used CI/CD in conjunction with
            a risk based approach to redefine and create new systems at / or
            exceeding industry standards; such as key risk assessment procedures
            with respect to CDD regulatory compliance requirements.
          </p>
        </div>
      </div>
      <div class="md:col-span-1 col-span-3">
        <ListBox />
      </div>
    </div>
  );
};

export default AboutMe;
