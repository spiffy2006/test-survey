export const columbus = {
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "text",
     name: "ssn",
     title: "SS#",
     validators: [
      {
       type: "regex",
       text: "SSN",
       regex: "[0-9]{3}-[0-9]{2}-[0-9]{4}"
      }
     ]
    },
    {
     type: "text",
     name: "question2",
     title: "Drivers License #",
     inputType: "number"
    },
    {
     type: "text",
     name: "question3",
     title: "First Name"
    },
    {
     type: "text",
     name: "question4",
     title: "Middle Name"
    },
    {
     type: "text",
     name: "question5",
     title: "Last Name"
    },
    {
     type: "panel",
     name: "Residence Address",
     elements: [
      {
       type: "text",
       name: "question11",
       title: "Phone",
       inputType: "number"
      },
      {
       type: "text",
       name: "question6",
       title: "Address Line 1"
      },
      {
       type: "text",
       name: "question7",
       title: "Address Line 2"
      },
      {
       type: "text",
       name: "question8",
       title: "City"
      },
      {
       type: "text",
       name: "question9",
       title: "State"
      },
      {
       type: "text",
       name: "question10",
       title: "Zip"
      }
     ],
     title: "Residence Info"
    },
    {
     type: "panel",
     name: "panel1",
     elements: [
      {
       type: "text",
       name: "question12",
       title: "Phone",
       inputType: "number"
      },
      {
       type: "text",
       name: "question13",
       title: "Address Line 1"
      },
      {
       type: "text",
       name: "question14",
       title: "Address Line 2"
      },
      {
       type: "text",
       name: "question15",
       title: "City"
      },
      {
       type: "text",
       name: "question16",
       title: "State"
      },
      {
       type: "text",
       name: "question17",
       title: "Zip"
      }
     ],
     title: "Local Info"
    },
    {
     type: "text",
     name: "question18",
     title: "Date of Birth",
     inputType: "date"
    },
    {
     type: "dropdown",
     name: "question19",
     title: "Race",
     choices: [
      {
       value: "item1",
       text: "Caucasian"
      },
      {
       value: "item2",
       text: "Black"
      },
      {
       value: "item3",
       text: "Hispanic"
      },
      {
       value: "item4",
       text: "Other non-white"
      }
     ]
    },
    {
     type: "text",
     name: "question20",
     title: "Place of Birth"
    },
    {
     type: "radiogroup",
     name: "question21",
     title: "Sex",
     choices: [
      {
       value: "item1",
       text: "M"
      },
      {
       value: "item2",
       text: "F"
      }
     ]
    },
    {
     type: "multipletext",
     name: "question22",
     title: "Height",
     items: [
      {
       name: "text1",
       inputType: "number",
       title: "Feet"
      },
      {
       name: "text2",
       inputType: "number",
       title: "Inches"
      }
     ]
    },
    {
     type: "text",
     name: "question23",
     title: "Weight",
     inputType: "number"
    },
    {
     type: "text",
     name: "question24",
     title: "Hair Color"
    },
    {
     type: "text",
     name: "question25",
     title: "Eye Color"
    },
    {
     type: "radiogroup",
     name: "question26",
     title: "Are you",
     choices: [
      {
       value: "item1",
       text: "Citizen of the United States of America"
      },
      {
       value: "item2",
       text: "Legal Alien"
      }
     ]
    },
    {
     type: "text",
     name: "question27",
     visibleIf: "{question26} = \"item2\"",
     title: "Alien Registration Number"
    },
    {
     type: "comment",
     name: "question28",
     title: "List ALL felony convictions, anywhere in the United States, in the last 5 years:"
    },
    {
     type: "radiogroup",
     name: "question29",
     title: "Are you on felony probation or parole?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "text",
     name: "question30",
     visibleIf: "{question29} = \"item1\"",
     title: "Date Began",
     inputType: "date"
    },
    {
     type: "radiogroup",
     name: "question31",
     title: "Have you or your company had a city of Columbus license revoked, suspended, or refused in the last 3 years?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "text",
     name: "question32",
     title: "Business Name"
    },
    {
     type: "panel",
     name: "panel2",
     elements: [
      {
       type: "text",
       name: "question39",
       title: "Phone",
       inputType: "number"
      },
      {
       type: "text",
       name: "question33",
       title: "Address Line 1"
      },
      {
       type: "text",
       name: "question34",
       title: "Address Line 2"
      },
      {
       type: "text",
       name: "question35",
       title: "City"
      },
      {
       type: "text",
       name: "question36",
       title: "State"
      },
      {
       type: "text",
       name: "question37",
       title: "Zip"
      }
     ],
     title: "Business Info"
    },
    {
     type: "text",
     name: "question38",
     title: "State of Ohio Vendor License Number"
    },
    {
     type: "text",
     name: "question40",
     title: "Promoter's Name (If different from above)"
    },
    {
     type: "panel",
     name: "panel3",
     elements: [
      {
       type: "text",
       name: "question41",
       title: "Phone",
       inputType: "number"
      },
      {
       type: "text",
       name: "question42",
       title: "Address Line 1"
      },
      {
       type: "text",
       name: "question43",
       title: "Address Line 2"
      },
      {
       type: "text",
       name: "question44",
       title: "City"
      },
      {
       type: "text",
       name: "question45",
       title: "State"
      },
      {
       type: "text",
       name: "question46",
       title: "Zip"
      }
     ],
     visibleIf: "{question40} notempty",
     title: "Promoter Info"
    },
    {
     type: "paneldynamic",
     name: "question47",
     title: "List all of the persons that have a direct interest in the business",
     templateElements: [
      {
       type: "panel",
       name: "panel4",
       elements: [
        {
         type: "text",
         name: "question52",
         title: "Name"
        },
        {
         type: "text",
         name: "question55",
         title: "Date of Birth",
         inputType: "date"
        },
        {
         type: "text",
         name: "question1",
         title: "SS#",
         validators: [
          {
           type: "regex",
           text: "SSN",
           regex: "[0-9]{3}-[0-9]{2}-[0-9]{4}"
          }
         ]
        },
        {
         type: "text",
         name: "question56",
         title: "Title"
        },
        {
         type: "text",
         name: "question53",
         title: "Phone",
         inputType: "number"
        },
        {
         type: "text",
         name: "question54",
         title: "Address Line 1"
        },
        {
         type: "text",
         name: "question48",
         title: "Address Line 2"
        },
        {
         type: "text",
         name: "question49",
         title: "City"
        },
        {
         type: "text",
         name: "question50",
         title: "State"
        },
        {
         type: "text",
         name: "question51",
         title: "Zip"
        }
       ],
       title: "Direct Interest"
      }
     ]
    },
    {
     type: "comment",
     name: "question57",
     title: "Describe types of products to be sold"
    },
    {
     type: "comment",
     name: "question58",
     title: "How will products be sold? (Door-to-door, Push cart, table, etc.)"
    },
    {
     type: "comment",
     name: "question59",
     title: "Where will products be sold? Location, Special Event? Be specific."
    },
    {
     type: "text",
     name: "question61",
     title: "Tent Permit Number (If applicable)"
    },
    {
     type: "file",
     name: "question60",
     title: "Proof of OSU Approval. Health and Fire",
     maxSize: 0
    }
   ]
  }
 ]
}