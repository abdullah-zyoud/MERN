import React from "react";
import { useParams } from "react-router-dom";

const Params = (props) => {
  const { string, color, bgcolor } = useParams();

  return (
    <div>
      {
        isNaN(string) ? ( 
          <p
            style={
              color && !bgcolor
                ? { color: color }
                : color && bgcolor
                ? { color: color, background: bgcolor }
                : null
            }
          >
            This is a string: {string}
          </p>
        ) : (
          <p>This is a number: {string}</p>
        )
      }
    </div>
  );
};

export default Params;