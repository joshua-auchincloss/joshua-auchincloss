import { createSignal, For } from "solid-js";
import { LinkItem } from "../suppl/sources";
import ImgSrcs from "../suppl/sources";

const ListItem = (item: LinkItem) => {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      class="group grid place-items-center justify-center snap-x"
    >
      {" "}
      <img
        width="40"
        height="40"
        src={item.src}
        alt={item.alt}
        class="ImgRef__ group-hover:-translate-y-1 transition-transform duration-50
        transform-gpu"
      />{" "}
      <span
        class="w-auto p-2 m-2 -top-4 rounded-md shadow-md
      text-white bg-black text-xs font-bold transition-all duration-50
      scale-0 origin-bottom group-hover:scale-100 snap-center transform-gpu"
      >
        {item.tooltip}
      </span>
    </a>
  );
};

const ImgGrid = (props: { title: string; GridItem: LinkItem[] }) => {
  return (
    <>
      <h1 class="text-xl font-medium py-4">{props.title}</h1>
      <div class="grid grid-flow-row grid-cols-5 lg:grid-cols-10 flex-auto space-x-3 my-4 place-items-center">
        <For
          each={props.GridItem}
          fallback={<h1>Ooops :p</h1>}
        >
          {ListItem}
        </For>
      </div>
    </>
  );
};

const ListBox = () => {
  const [srcs, setSrcs] = createSignal<LinkItem[]>(ImgSrcs);
  const sortSrcs = (type: string) => {
    return srcs()
      .filter((item: LinkItem) => item.type === type)
      .sort((a: LinkItem, b: LinkItem) => a.alt.localeCompare(b.alt, "en-ca"));
  };
  const Languages = sortSrcs("language");
  const Frameworks = sortSrcs("framework");
  const Web = sortSrcs("webframework");
  const Data = sortSrcs("dataframework");
  return (
    <div>
      <ImgGrid GridItem={Languages} title="Programming Languages" />
      <ImgGrid GridItem={Frameworks} title="General Frameworks" />
      <ImgGrid GridItem={Data} title="Data Frameworks" />
      <ImgGrid GridItem={Web} title="Web Frameworks" />
    </div>
  );
};

export default ListBox;
