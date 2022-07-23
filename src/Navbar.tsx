import { GitLink } from "./suppl/constants";

const InternalRef = (props: { title: string; href: string }) => {
  return (
    <a
      class="float float-right hover:text-indigo-800 text-slate-700"
      href={props.href}
    >
      <h2 class="text-center">{props.title}</h2>
    </a>
  );
};

function NavBar() {
  return (
    <nav class="flex items-center space-x-4 px-4 py-4 bg-gray-100">
      <div>
        <a href="/">
          <h6 class="text-2xl font-semibold">JA</h6>
        </a>
      </div>
      <div class="flex flex-grow" />
      <InternalRef title="About Me" href="/about" />
      <ul>
        <li>
          <GitLink />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
