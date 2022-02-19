import React from "react";

export default function Nav(props) {
  const [formData, setFormData] = React.useState(props.searchParams);

  // update formData based on fields interaction
  function handleFieldChange(event) {
    const { name, value, type, checked } = event.target;

    // for genres fields update an array based on the checked property of the element
    if (type === "checkbox") {
      if (checked) {
        if ("genres" in formData) {
          if (!formData.genres.includes(value)) {
            formData.genres.push(value);
          }
        } else {
          formData.genres = [value];
        }
      } else {
        if ("genres" in formData) {
          if (formData.genres.includes(value)) {
            const index = formData.genres.indexOf(value);
            formData.genres.splice(index, 1);
          }
        }
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? formData.genres : value,
    }));
  }

  //  pass back to App the searchParams updated values
  function handleSubmitSearch(event) {
    event.preventDefault();
    props.setSearchParams(formData);
  }

  return (
    <>
      <div className="search">
        <form action="/" method="get" onSubmit={handleSubmitSearch}>
          <p>
            <input
              type="text"
              id="input-search"
              placeholder="Search a movie title"
              name="title"
              onChange={handleFieldChange}
            />
            <button id="btn-search" type="submit">
              Search
            </button>
          </p>
          <p id="genre-search">
            <span>
              <input
                type="checkbox"
                name="genres"
                value="action"
                onChange={handleFieldChange}
              />
              Action
            </span>
            <span>
              <input
                type="checkbox"
                name="genres"
                value="adventure"
                onChange={handleFieldChange}
              />
              Adventure
            </span>
            <span>
              <input
                type="checkbox"
                name="genres"
                value="animation"
                onChange={handleFieldChange}
              />
              Animation
            </span>
            <span>
              <input
                type="checkbox"
                name="genres"
                value="comedy"
                onChange={handleFieldChange}
              />
              Comedy
            </span>
            <span>
              <input
                type="checkbox"
                name="genres"
                value="drama"
                onChange={handleFieldChange}
              />
              Drama
            </span>
            <span>
              <input
                type="checkbox"
                name="genres"
                value="family"
                onChange={handleFieldChange}
              />
              Family
            </span>
            <span>
              {" "}
              <input
                type="checkbox"
                name="genres"
                value="fantasy"
                onChange={handleFieldChange}
              />
              Fantasy
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
