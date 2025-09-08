import { OrbitingCircles } from "./OrbitingCircles";
import Image from "next/image";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

// const Icon = ({ src }) => (
//   <img src={src} className="duration-200 rounded-sm hover:scale-110" />
// );
interface IconProps {
  src: string;
}

const Icon: React.FC<IconProps> = ({ src }) => {
  const alt = src.split("/").pop().split(".")[0];
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="duration-200 rounded-sm hover:scale-110"
    />
  );
};
