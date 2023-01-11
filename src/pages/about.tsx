import ListBox from "../components/ListBox";
import TimelineItem, { TimelineItemProps } from "../components/TimelineItem";

const AboutMe = () => {
  const history: TimelineItemProps[] = [
    {
      start: "November 2021",
      end: "Present",
      title: "KYC / CDD Analyst, Automations Efficiencies",
      company: "Royal Bank of Canada, Investor & Treasury Services",
    },
  ];
  return (
    <div class="grid px-4 space-y-6 content-center grid-cols-3 align-top">
      <div class="place-self-center md:col-span-2 col-span-3 ">
        <h2 class="font-medium text-xl">Career</h2>
        <div class="grid grid-flow-col grid-cols-2  p-3 space-y-3 space-x-2 col-span-1">
          {history.map((p) => (
            <TimelineItem {...p} />
          ))}
        </div>
        <div class="col-span-2">
          <h2 class="font-medium text-xl my-5">Summary</h2>
          <p class="px-3">
            My current roles are focused in building industry specific UI based
            analytics, reporting, and monitoring cloud applications to meet
            PCMLTFA requirements. These systems I have built are specialized to
            AML and regulatory compliance procedures; from open-source AML
            detection, distributed data collection and monitoring, live document
            collection parsing, sanctions screening systems, complex
            multi-referenced knowledge graphs, and stateless / distributed
            authentication libraries. During my experiences working within the
            global financial services sector, I have focused my skills and used
            CI/CD in conjunction with a risk based approach to redefine and
            create new procedures exceeding industry standards within the realm
            of Perpetual Know Your Client (pKYC) systems. All the systems I have
            built are cloud-native, and strongly supported by technologies such
            as Kubernetes.
          </p>
        </div>
      </div>
      <div class="md:col-span-2 col-span-3">
        <ListBox />
      </div>
    </div>
  );
};

export default AboutMe;
