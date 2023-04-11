import { useState } from "react";

const Source = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-3 border border-black rounded">
      <h1 className="text-2xl font-bold"> {title} component</h1>
      {isVisible && <p>{desc}</p>}
      <div
        className="cursor-pointer ease-in duration-700"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <p className="underline">Hide</p> : <p>Show</p>}
      </div>
    </div>
  );
};
const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("about");
  return (
    <div>
      <Source
        title={"Header"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolores harum maiores placeat temporibus ex sit quae, eius, rerum alias officiis debitis necessitatibus aspernatur id unde iste perspiciatis iure quod eos sint recusandae molestiae quam assumenda! Facilis recusandae saepe molestiae repellat suscipit, similique illo exercitationem ad laborum. Id neque dolore facilis quasi itaque qui sit iusto expedita tempora aspernatur, est excepturi dignissimos impedit sapiente dicta illo, eius corrupti libero minus ducimus quidem odio adipisci. Excepturi voluptas laudantium fugit labore dolor."
        }
        isVisible={isVisibleSection === "header"}
        setIsVisible={() => {
          setIsVisibleSection("header");
        }}
      />
      <Source
        title={"About"}
        desc={
          "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolores harum maiores placeat temporibus ex sit quae, eius, rerum alias officiis debitis necessitatibus aspernatur id unde iste perspiciatis iure quod eos sint recusandae molestiae quam assumenda! Facilis recusandae saepe molestiae repellat suscipit, similique illo exercitationem ad laborum. Id neque dolore facilis quasi itaque qui sit iusto expedita tempora aspernatur, est excepturi dignissimos impedit sapiente dicta illo, eius corrupti libero minus ducimus quidem odio adipisci. Excepturi voluptas laudantium fugit labore dolor."
        }
        isVisible={isVisibleSection === "about"}
        setIsVisible={() => {
          setIsVisibleSection("about");
        }}
      />
      <Source
        title={"FAQ"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, dolores harum maiores placeat temporibus ex sit quae, eius, rerum alias officiis debitis necessitatibus aspernatur id unde iste perspiciatis iure quod eos sint recusandae molestiae quam assumenda! Facilis recusandae saepe molestiae repellat suscipit, similique illo exercitationem ad laborum. Id neque dolore facilis quasi itaque qui sit iusto expedita tempora aspernatur, est excepturi dignissimos impedit sapiente dicta illo, eius corrupti libero minus ducimus quidem odio adipisci. Excepturi voluptas laudantium fugit labore dolor."
        }
        isVisible={isVisibleSection === "faq"}
        setIsVisible={() => {
          setIsVisibleSection("faq");
        }}
      />
    </div>
  );
};
export default Instamart;
