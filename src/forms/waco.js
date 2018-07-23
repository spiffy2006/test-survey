export const waco = {
 pages: [
  {
   name: "Primary Applicant Information",
   elements: [
    {
     type: "text",
     name: "question1",
     title: "First name",
     isRequired: true
    },
    {
     type: "text",
     name: "question3",
     startWithNewLine: false,
     title: "Middle Initial"
    },
    {
     type: "text",
     name: "question2",
     startWithNewLine: false,
     title: "Last name",
     isRequired: true
    },
    {
     type: "text",
     name: "Date",
     startWithNewLine: false,
     isRequired: true,
     inputType: "date"
    },
    {
     type: "text",
     name: "question4",
     title: "Street Address",
     isRequired: true
    },
    {
     type: "text",
     name: "question5",
     startWithNewLine: false,
     title: "Apartment/Unit #",
     isRequired: true
    },
    {
     type: "text",
     name: "question6",
     title: "City",
     isRequired: true
    },
    {
     type: "text",
     name: "question7",
     startWithNewLine: false,
     title: "State",
     isRequired: true
    },
    {
     type: "text",
     name: "question9",
     startWithNewLine: false,
     title: "ZIP",
     isRequired: true
    },
    {
     type: "text",
     name: "question8",
     title: "Phone",
     isRequired: true,
     validators: [
      {
       type: "regex",
       text: "Invalid phone number format",
       regex: "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
      }
     ]
    },
    {
     type: "text",
     name: "question10",
     startWithNewLine: false,
     title: "Email Address",
     isRequired: true,
     validators: [
      {
       type: "email",
       text: "Invalid email address"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question11",
     title: "Permit Type",
     choices: [
      {
       value: "item1",
       text: "Peddler"
      },
      {
       value: "item2",
       text: "Door-to-Door Solicitation"
      }
     ]
    },
    {
     type: "text",
     name: "question12",
     title: "Number of Permits",
     isRequired: true,
     inputType: "number"
    },
    {
     type: "text",
     name: "Business Organization Name",
     isRequired: true
    },
    {
     type: "text",
     name: "Business Organization Address",
     isRequired: true
    },
    {
     type: "text",
     name: "Business Organization Web Address",
     isRequired: true,
     validators: [
      {
       type: "regex",
       text: "Invalid URL format (i.e. https://mydomain.com)",
       regex: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
      }
     ]
    },
    {
     type: "text",
     name: "Proposed Activity",
     isRequired: true
    },
    {
     type: "text",
     name: "Sales Tax License Number",
     isRequired: true
    },
    {
     type: "file",
     name: "Sales Tax License Attachment",
     maxSize: 0
    },
    {
     type: "text",
     name: "question13",
     title: "Location of Records / Proof of City Sales Tax Payment",
     isRequired: true
    }
   ],
   title: "Applicant Information (Principal)"
  },
  {
   name: "Applicants",
   elements: [
    {
     type: "paneldynamic",
     name: "question15",
     title: "Applicant",
     templateElements: [
      {
       type: "text",
       name: "question14",
       title: "First Name",
       isRequired: true
      },
      {
       type: "text",
       name: "question17",
       title: "Middle Name",
       isRequired: true
      },
      {
       type: "text",
       name: "question16",
       title: "Last Name",
       isRequired: true
      },
      {
       type: "text",
       name: "question18",
       title: "Date of Birth",
       isRequired: true,
       inputType: "date"
      },
      {
       type: "text",
       name: "question19",
       title: "Place of Birth",
       isRequired: true
      },
      {
       type: "text",
       name: "question20",
       title: "Address",
       isRequired: true
      },
      {
       type: "text",
       name: "question21",
       title: "Social Security Number",
       isRequired: true,
       validators: [
        {
         type: "regex",
         text: "Invalid SSN (i.e. 135478965)",
         regex: "^\\d{9}$"
        }
       ]
      },
      {
       type: "html",
       name: "question22",
       html: "<h5>Physical Description</h5>"
      },
      {
       type: "radiogroup",
       name: "question24",
       title: "Gender",
       choices: [
        {
         value: "item1",
         text: "Male"
        },
        {
         value: "item2",
         text: "Female"
        }
       ]
      },
      {
       type: "text",
       name: "question23",
       title: "Race / Ethnicity"
      },
      {
       type: "text",
       name: "question25",
       title: "Height"
      },
      {
       type: "text",
       name: "question26",
       title: "Weight"
      },
      {
       type: "text",
       name: "question27",
       title: "Hair"
      },
      {
       type: "text",
       name: "question28",
       title: "Eyes"
      },
      {
       type: "html",
       name: "question29",
       html: "<h5>Vehicle Details</h5>"
      },
      {
       type: "text",
       name: "question30",
       title: "Make"
      },
      {
       type: "text",
       name: "question31",
       title: "Model"
      },
      {
       type: "text",
       name: "question32",
       title: "Year",
       inputType: "number"
      },
      {
       type: "text",
       name: "question33",
       title: "Color",
       inputType: "color"
      },
      {
       type: "text",
       name: "question34",
       title: "State License Plate Number"
      }
     ],
     panelCount: 1,
     minPanelCount: 1
    }
   ]
  },
  {
   name: "Additional Information",
   elements: [
    {
     type: "comment",
     name: "question35",
     title: "Please include any additional information on permit request:"
    }
   ]
  },
  {
   name: "Criminal History",
   elements: [
    {
     type: "html",
     name: "question36",
     html: "<p>\nThe City of Waco conducts criminal history checks on all its' applicants for peddler or door-to-door solicitors. Please answer the following questions. \n<br/>(Please note: A conviction does not necessarily mean that your application will be automatically disqualified from permit consideration.)\n</p>"
    },
    {
     type: "radiogroup",
     name: "probationParole",
     title: "Are you currently on felony probation, felony deferred adjudication, or parole?",
     isRequired: true,
     choices: [
      "Yes",
      "No"
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "felony",
     title: "Have you ever been convicted, placed on deferred adjudication or community supervision, or pleaded guilty or no contest or have charges pending to a felony offense?",
     isRequired: true,
     choices: [
      "Yes",
      "No"
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "question39",
     visibleIf: "{felony} = Yes",
     title: "Date(s):",
     enableIf: "{felony} = Yes",
     inputType: "date"
    },
    {
     type: "radiogroup",
     name: "misdemeanor",
     title: "Have you ever been convicted, placed on deferred adjudication or community supervision, or pleaded guilty or no contest or have charges pending to a misdemeanor offense other than a traffic violation?",
     isRequired: true,
     choices: [
      "Yes",
      "No"
     ],
     colCount: 0
    },
    {
     type: "text",
     name: "question39",
     visibleIf: "{misdemeanor} = Yes",
     title: "Date(s):",
     enableIf: "{misdemeanor} = Yes",
     inputType: "date"
    },
    {
     type: "radiogroup",
     name: "sexOffender",
     title: "Are you currently on a registry of sex offenders of any U.S. State, territory, or federally recognized trible?",
     isRequired: true,
     choices: [
      "Yes",
      "No"
     ],
     colCount: 0
    },
    {
     type: "paneldynamic",
     name: "question37",
     visibleIf: "{felony} = Yes or {misdemeanor} = Yes or {probationParole} = Yes",
     title: "Supplemental Conviction Information",
     enableIf: "{felony} = Yes or {misdemeanor} = Yes or {probationParole} = Yes",
     templateElements: [
      {
       type: "text",
       name: "question38",
       title: "Applicant Name",
       description: "Last, First, Middle Initial"
      },
      {
       type: "text",
       name: "question40",
       title: "Social Security Number"
      },
      {
       type: "text",
       name: "question41",
       startWithNewLine: false,
       title: "Date",
       inputType: "month"
      },
      {
       type: "radiogroup",
       name: "question42",
       startWithNewLine: false,
       title: "Type",
       choices: [
        {
         value: "item1",
         text: "Felony"
        },
        {
         value: "item2",
         text: "Misdemeanor"
        }
       ]
      },
      {
       type: "text",
       name: "question43",
       title: "Nature of Offense"
      },
      {
       type: "text",
       name: "question44",
       startWithNewLine: false,
       title: "Case Disposition"
      },
      {
       type: "text",
       name: "question45",
       startWithNewLine: false,
       title: "Name and Location of Court"
      }
     ],
     panelCount: 1,
     minPanelCount: 1
    }
   ]
  }
 ],
 showQuestionNumbers: "off"
};