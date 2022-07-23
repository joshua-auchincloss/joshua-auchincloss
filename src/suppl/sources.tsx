export interface LinkItem {
  alt: string;
  src: string;
  href: string;
  tooltip: string;
  type: string;
}

const ImgSrcs: LinkItem[] = [
  // if anyone is ever looking at this mess, ignore pls
  {
    alt: "solid",
    tooltip: "Solid",
    src: "https://solidjs.com/assets/logo.123b04bc.svg",
    href: "https://solidjs.com/",
    type: "webframework",
  },
  {
    alt: "angular",
    tooltip: "Angular",
    src: "https://angular.io/assets/images/logos/angular/angular.svg",
    href: "https://angular.io/",
    type: "webframework",
  },
  {
    alt: "bash",
    tooltip: "bash",
    src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
    href: "https://www.gnu.org/software/bash/",
    type: "language",
  },
  {
    alt: "bootstrap",
    tooltip: "Bootstrap",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    href: "https://getbootstrap.com/",
    type: "webframework",
  },
  {
    alt: "c",
    tooltip: "C-lang",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    href: "https://www.cprogramming.com/",
    type: "language",
  },
  {
    alt: "coffeescript",
    tooltip: "Coffeescript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
    href: "https://offeescript.org/",
    type: "language",
  },
  {
    alt: "cplusplus",
    tooltip: "C++",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    href: "https://www.w3schools.com/cpp/",
    type: "language",
  },
  {
    alt: "docker",
    tooltip: "Docker",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    href: "https://www.docker.com/",
    type: "framework",
  },
  {
    alt: "elasticsearch",
    tooltip: "ElasticSearch",
    src: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
    href: "https://www.elastic.co/",
    type: "framework",
  },
  {
    alt: "flask",
    tooltip: "Flask",
    src: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
    href: "https://flask.palletsprojects.com/",
    type: "framework",
  },
  {
    alt: "haskell",
    tooltip: "Haskell",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
    href: "https://www.haskell.org/",
    type: "language",
  },
  {
    alt: "javascript",
    tooltip: "JavaScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "language",
  },
  {
    alt: "kubernetes",
    tooltip: "Kubernetes",
    src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    href: "https://kubernetes.io/",
    type: "framework",
  },
  {
    alt: "mssql",
    tooltip: "MS SQL",
    src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    href: "https://www.microsoft.com/en-us/sql-server",
    type: "dataframework",
  },
  {
    alt: "opencv",
    tooltip: "Open CV",
    src: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
    href: "https://opencv.org/",
    type: "dataframework",
  },
  {
    alt: "pandas",
    tooltip: "Pandas",
    src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
    href: "https://pandas.pydata.org/",
    type: "dataframework",
  },
  {
    alt: "python",
    tooltip: "Python",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    href: "https://www.python.org/",
    type: "language",
  },
  {
    alt: "pytorch",
    tooltip: "PyTorch",
    src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    href: "https://pytorch.org/",
    type: "dataframework",
  },
  {
    alt: "react",
    tooltip: "React",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    href: "https://reactjs.org/",
    type: "webframework",
  },
  {
    alt: "redis",
    tooltip: "Redis",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    href: "https://redis.io/",
    type: "framework",
  },
  {
    alt: "ruby",
    tooltip: "Ruby",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    href: "https://www.ruby-lang.org/en/",
    type: "language",
  },
  {
    alt: "sass",
    tooltip: "SASS",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    href: "https://sass-lang.com/",
    type: "webframework",
  },
  {
    alt: "scikit_learn",
    tooltip: "SK Learn",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    href: "https://scikit-learn.org/",
    type: "dataframework",
  },
  {
    alt: "seaborn",
    tooltip: "Seaborn",
    src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    href: "https://seaborn.pydata.org/",
    type: "dataframework",
  },
  {
    alt: "selenium",
    tooltip: "Selenium",
    src: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
    href: "https://www.selenium.dev/",
    type: "framework",
  },
  {
    alt: "sqlite",
    tooltip: "SQLite",
    src: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    href: "https://www.sqlite.org/",
    type: "dataframework",
  },
  {
    alt: "swift",
    tooltip: "SWIFT",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    href: "https://developer.apple.com/swift/",
    type: "language",
  },
  {
    alt: "tailwind",
    tooltip: "Tailwind",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    href: "https://tailwindcss.com/",
    type: "webframework",
  },
  {
    alt: "tensorflow",
    tooltip: "Tensorflow",
    src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    href: "https://www.tensorflow.org/",
    type: "dataframework",
  },
  {
    alt: "typescript",
    tooltip: "Typescript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org/",
    type: "language",
  },
  {
    alt: "deno",
    tooltip: "Deno",
    src: "https://deno.land/logo.svg?__frsh_c=1n1ab050b6dg",
    href: "https://deno.land",
    type: "webframework",
  },
  {
    alt:"openshift",
    tooltip:"OpenShift",
    src:"https://avatars.githubusercontent.com/u/792337?s=200&v=4",
    href:"https://openshift.com",
    type:"framework"
  },
  {
    alt:"fastapi",
    tooltip:"FastApi",
    src: "/fastapi-1.svg",
    href:"https://fastapi.tiangolo.com",
    type:"framework",
  },
  {
    alt:"preact",
    tooltip:"Preact",
    src: "/preact.svg",
    href:"https://preactjs.com",
    type:"webframework",
  },
  {
    alt: "neo4j",
    tooltip:"Neo4j",
    src:"https://neo4j.com/wp-content/themes/neo4jweb/v2-templates/brand/assets/logo-section-6.svg",
    href:"https://neo4j.com",
    type:"dataframework"
  }
];

export default ImgSrcs;
