import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBeforeUnload } from "react-router-dom";

function General(props) {
  /*   const [save, setSave] = useState("");

  useEffect(() => {
    window.onbeforeunload = function () {
      if (!save) {
        return "If you leave this page, you will lose any unsaved changes.";
      }
    };
  }, [save]);
 */
  const {
    register,
    formState: { errors },
    // handleSubmit,
    control,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("object");
    // setSave(true);
  };

  const [saved, setSaved] = useState(false);

  const handleBeforeUnload = (e) => {
    if (!saved) {
      e.preventDefault();
      e.returnValue = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  /*   useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [saved]); */

  const [state, setState] = React.useState(null);

  // save it off before users navigate away
  useBeforeUnload(
    React.useCallback(() => {
      localStorage.stuff = state;
    }, [state])
  );

  // read it in when they return
  React.useEffect(() => {
    if (state === null && localStorage.stuff != null) {
      setState(localStorage.stuff);
    }
  }, [state]);

  console.log(state);

  return (
    <div>
      <div>
        <form /* onSubmit={handleSubmit(onSubmit)} */>
          <div className="my-6">
            <label className="font-bold">Username</label>
            <input
              className="  my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={"test" || ""}
              {...register("username")}
              required
            />
          </div>

          <div className="my-6">
            <label className="font-bold ">Email</label>
            <input
              className=" my-2  border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={"@gmail" || ""}
              {...register("userEmail")}
              required
            />
          </div>

          <h1 className="text-red-700 my-2">
            This field not working now we are working now
          </h1>

          <div className="flex justify-end">
            {" "}
            <button
              className={`text-white rounded-md   bg-[#ea4c89] px-3 py-2 
                    cursor-pointer`}
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <br />

      {/*   <form onSubmit={handleSubmit}>
        <input className="bg-pink-400" type="text" />
        <button type="submit">submit</button>
      </form>
      <br />
      <a href="google.com">test link</a>
      <br />
      <Link to="/lkj">to</Link> */}
    </div>
  );
}

export default General;
