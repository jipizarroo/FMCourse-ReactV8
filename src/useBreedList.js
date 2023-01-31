import { useState, useEffect } from "react";

// If it has seen the animal before its gonna cache thouse animals. ( Like from dog to cat to dog.)
const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  // The reason to have a status on a custom hook, is becouse we can easily test it later.
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    // why is this function inside the useEffect?
    // 1.- React encourages you to do it this way
    // 2.- Anatomically this is what you want everytime animal re-renders ( A nice tidy individual effect.)
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
      console.log(res);
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
