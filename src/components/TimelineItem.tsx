import { JSX } from "solid-js";

export interface TimelineItemProps {
    start: string
    end: string
    title: string
    company: string
}

export default function TimelineItem(props: TimelineItemProps): JSX.Element {
  return (
    <>
      <div class="grid col-span-1 row-span-3 place-items-center justify-self-end">
        <span class="text-slate-500 font-thin py-2 row-span-1 text-center">
          {" "}
          {props.start} - {props.end}
        </span>
      </div>
      
      <div class="grid justify-self-start place-items-center p-3 col-span-1">
        <h2 class="font-medium text-center pb-3 col-span-2 row-span-1">
          {props.title}
        </h2>
        <span class="float-right text-center col-span-2 ">
          {props.company}
        </span>
      </div>
    </>
  );
}
