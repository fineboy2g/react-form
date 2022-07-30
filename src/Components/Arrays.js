import React from 'react'

function Arrays() {


    const student=[

        {
            id:1,
            name:"kofi"


        },

        {
            id:2,
            name:"Ama"


        },

        {
            id:3,
            name:"efua"


        }
    ]
  return (
    <div>
        <h1>Arrays in react</h1>

        {student.map((student)=>(

            <h1>{student.name}</h1>

        )
        )
        }
      
    </div>
  )
}

export default Arrays
