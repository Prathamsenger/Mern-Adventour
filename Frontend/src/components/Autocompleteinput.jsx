import React, { useRef, useEffect } from "react";

const AutocompleteInput = () => {
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (!autocompleteRef.current) return;

    autocompleteRef.current.addEventListener(
      "gmp-placeautocomplete-placechange",
      (e) => {
        const place = e.target.value;
        console.log("Selected place:", place);
      }
    );
  }, []);

  return (
    <gmpx-place-autocomplete
      ref={autocompleteRef}
      style={{
        width: "100%",
        height: "40px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
      placeholder="Enter a city"
    ></gmpx-place-autocomplete>
  );
};

export default AutocompleteInput;