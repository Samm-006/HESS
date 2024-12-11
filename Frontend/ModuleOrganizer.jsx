import React, { useState } from 'react';
import '../styles/ModuleOrganizer.css';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { GrFormAdd } from "react-icons/gr";
import { IoTrash } from "react-icons/io5";

function ModuleOrganizer() {
  const [sections, setSections] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleAddSection = () => {
    const newSection = {
      id: sections.length + 1,
      mark: "",
      name: "",
      showCustomName: true,
      feedbacks: [],
      tagName: "", // Added tagName property
    };
    setSections([...sections, newSection]);
    setDropdownItems([...dropdownItems, `Section ${newSection.id}`]);
  };

  const handleRemoveSection = (id) => {
    setSections((prevSections) => {
      const updatedSections = prevSections.filter((section) => section.id !== id);
      return updatedSections.map((section, index) => ({
        ...section,
        id: index + 1,
      }));
    });
    setDropdownItems((prevItems) =>
      prevItems.filter((item) => item !== `Section ${id}`)
    );
  };

  const handleInputChange = (id, field, value) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const handleTagSectionAdd = (sectionName, tagName) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        `Section ${section.id}` === sectionName
          ? { ...section, tagName: tagName }
          : section
      )
    );
  };

  const handleRemoveTag = (id) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, tagName: "" } : section
      )
    );
  };

  const handleAddFeedback = (sectionId, feedbackType) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              feedbacks: [
                ...section.feedbacks,
                feedbackType === "Custom..."
                  ? { type: "custom", value: "" }
                  : { type: "preset", value: feedbackType },
              ],
            }
          : section
      )
    );
  };

  const handleRemoveFeedback = (sectionId, feedbackIndex) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              feedbacks: section.feedbacks.filter((_, i) => i !== feedbackIndex),
            }
          : section
      )
    );
  };

  const handleCustomInputChange = (sectionId, feedbackIndex, value) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              feedbacks: section.feedbacks.map((feedback, i) =>
                i === feedbackIndex ? { ...feedback, value } : feedback
              ),
            }
          : section
      )
    );
  };

  return (
    <>
      {/* Upload Section */}
      <div className="formContainerI">
        <h2 className="HeaderI">UPLOAD FILE</h2>
        <form>
          <div className="formContainerII">
            <HiOutlineDocumentAdd className="adder" />
            <h5 className="HeaderII">
              Drag and drop or <a href="#">browse</a> your files
            </h5>
          </div>
          <button type="submit" className="upload-btn">Upload</button>
          <div className="assgnID">
            <label htmlFor="assignment">Assignment ID</label>
            <input
              type="text"
              id="assignment"
              className="assgnInput"
              placeholder="Enter ID..."
            />
          </div>
          <div className="mdlID">
            <label htmlFor="module">Module ID</label>
            <input
              type="text"
              id="module"
              className="mdlInput"
              placeholder="Enter ID..."
            />
          </div>
        </form>
      </div>

      {/* Section Builder */}
      <div className="Section2">
        <div className="form2">
          <h4 className="sectionHeader">SECTION BUILDER</h4>
          <button type="button" className="addBtn" onClick={handleAddSection}>
            Add
            <GrFormAdd className="plus" />
          </button>
          <div className="sectionFormsContainer">
            {sections.map((section) => (
              <div key={section.id} className="sectionForm">
                <div className='sectionHeaderContainer'>
                  <h4 className="sectionHeaderI">SECTION {section.id}</h4>
                  <button
                    type="button"
                    className="trashBtn"
                    onClick={() => handleRemoveSection(section.id)}
                  >
                    <IoTrash className="bin" />
                  </button>
                </div>
                <div className="overallMrk">
                  <label htmlFor={`mark-${section.id}`}>Overall Mark</label>
                  <input
                    type="text"
                    id={`mark-${section.id}`}
                    className="ovrlMrkInpt"
                    placeholder="Input a value..."
                    value={section.mark}
                    onChange={(e) =>
                      handleInputChange(section.id, "mark", e.target.value)
                    }
                  />
                </div>
                {section.showCustomName && (
                  <div className="custmName">
                    <label htmlFor={`name-${section.id}`}>Custom Name</label>
                    <input
                      type="text"
                      id={`name-${section.id}`}
                      className="custmInpt"
                      placeholder="Input a value..."
                      value={section.name}
                      onChange={(e) =>
                        handleInputChange(section.id, "name", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="trashBtnII"
                      onClick={() => handleRemoveCustomName(section.id)}
                    >
                      <IoTrash className="binII" />
                    </button>
                  </div>
                )}
                <div className="tagNameSection">
                  <label htmlFor={`tag-${section.id}`}>Tag Name</label>
                  <div className="tagInputContainer">
                    <input
                      type="text"
                      id={`tag-${section.id}`}
                      className="tagInput"
                      placeholder="..."
                      value={section.tagName}
                      onChange={(e) =>
                        handleInputChange(section.id, "tagName", e.target.value)
                      }
                      disabled={!!section.tagName}
                    />
                    {section.tagName && (
                      <button
                        type="button"
                        className="removeTagBtn"
                        onClick={() => handleRemoveTag(section.id)}
                      >
                        <IoTrash className="bin" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="Section3">
        <h4 className="feedbackHeadr">FEEDBACK SECTION</h4>
        <div className="feedbackFormsContainer">
          {sections.map((section) => (
            <div key={section.id} className="feedbackForm">
              <h4 className="feedbacksctnHeader">SECTION {section.id}</h4>
              
              <div className="dropdown">
                <h5 className="title">Required Feedback Text Field:</h5>
                <button
                  className="drpdwnButton btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Feedback
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleAddFeedback(section.id, "Strength")}
                    >
                      Strength
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleAddFeedback(section.id, "Weakness")}
                    >
                      Weakness
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleAddFeedback(section.id, "Custom...")}
                    >
                      Custom...
                    </button>
                  </li>
                </ul>
              </div>
              <div className="feedback-list">
                {section.feedbacks.map((feedback, index) => (
                  <div key={index} className="feedback-item">
                    {feedback.type === "preset" ? (
                      <>
                        <span>{feedback.value}</span>
                        <button
                          className="close-button"
                          onClick={() =>
                            handleRemoveFeedback(section.id, index)
                          }
                        >
                          ✖
                        </button>
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          className="custom-input"
                          placeholder="Enter custom feedback"
                          value={feedback.value}
                          onChange={(e) =>
                            handleCustomInputChange(
                              section.id,
                              index,
                              e.target.value
                            )
                          }
                        />
                        <button
                          className="close-button"
                          onClick={() =>
                            handleRemoveFeedback(section.id, index)
                          }
                        >
                          ✖
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* TAG SECTION */}
      <div className="Section4">
        <h4 className="tagHeader">TAG SECTION</h4>
        <div className="tagSectionContainer">
          <div className="tagName">
            <label htmlFor="tagInput">Tag Name</label>
            <input
              type="text"
              id="tagInput"
              className="tagInp"
              placeholder="Input a tag name..."
            />
          </div>
          <div className="dropdownI">
            <h5 className="titleI">Pick a section</h5>
            <button
              className="drpdwnButtonII btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Section
            </button>
            <ul className="dropdown-menu">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleTagSectionAdd(`Section ${section.id}`, document.getElementById("tagInput").value)
                    }
                  >
                    {`Section ${section.id}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
      <button type="submit" className="saveBtn">
                    SAVE
                </button>
      </div>
    </>
  );
}

export default ModuleOrganizer;