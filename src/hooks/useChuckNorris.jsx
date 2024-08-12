import { useState, useEffect } from "react";
import axios from "axios";

const useChuckNorris = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random"
        );
        setJoke(response.data.value);
      } catch (error) {
        console.error("Error fetching Chuck Norris joke:", error);
        setJoke("Error fetching joke");
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();

    const interval = setInterval(fetchJoke, 5000);

    return () => clearInterval(interval);
  }, []);

  return { joke, loading };
};

export default useChuckNorris;
