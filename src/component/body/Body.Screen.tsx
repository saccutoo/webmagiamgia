import { useEffect, useState } from "react";
import BodyAdapter from './Body.Adapter';
import Test from '../test/Test'
import Test2 from '../test/Test2'
import Organization from '../test/Organization'
import './Body.css';
import { ITest } from "../../interface/Test"
import base64 from "../../config/Base64"

import {
  getTest,
  addTest
} from "../../redux/actions/Test.Action"
import {
  getModal,
  updateModal
} from "../../redux/actions/Modal.Action"
import { connect, useDispatch } from "react-redux";
import TestContent   from "./Body.Modal.Screen";


function BodyScreen(props: any) {
  const {
    hasNotification, setHasNotification,
    send,
    sendNew,
    clickMe
  } = BodyAdapter();

  var json = {
    "ListOrganization": [
      {
        "vaue": "0",
        "ListBond": [],
        "ListSub": [
          {
            "value": 1,
            "ListSub": [
            ]
          },
          {
            "value": 2,
            "ListSub": [
              {
                "value": 3,
                "ListSub": [
                  {
                    "value": 5,
                    "ListSub": [

                    ]
                  },
                  {
                    "value": 6,
                    "ListSub": [

                    ]
                  },
                ]
              },
              {
                "value": 4,
                "ListSub": [
                  {
                    "value": 7,
                    "ListSub": [
                      {
                        "value": 9,
                        "ListSub": [

                        ]
                      },
                      {
                        "value": 10,
                        "ListSub": [
                          {
                            "value": 11,
                            "ListSub": [

                            ]
                          },
                          {
                            "value": 12,
                            "ListSub": [

                            ]
                          },
                        ]
                      },
                    ]
                  },
                  {
                    "value": 8,
                    "ListSub": [

                    ]
                  },
                ]
              },
            ]
          }
        ],
      },
      {

      }
    ]
  }

  const testMap = (datas: any) => {
    return datas.map(
      (item: ITest, index: number) => (
        <Test {...item}></Test>
      )
    );
  }

  const testReturn = () => {
    return (
      <Test key={"1"} value={"1"}></Test>
    )
  }
  return (
    <div className="body">
      {/* {process.env.REACT_APP_BASE_URL_API} */}
      <ul>
        {

          testMap(props.test.datas)

        }
        {
          // json.ListOrganization!=null && json.ListOrganization.length && 
          // json.ListOrganization.map((item, index) => 
          //     <Organization {...item} />
          // )

          // json.ListOrganization.map(function(item, i){
          //   // if(item){
          //   //     return <Organization {...item} />
          //   // }
          //   return item ? <Organization {...item} /> : ""
          // })

          <div>
            <p>{hasNotification}</p>      
            <Test2 value={2} clickMe={clickMe}> </Test2>

          </div>
        }

      </ul>

      {/* <button onClick={()=>props.addTest({key:"2",value:"2"})}>click me</button> */}
      <button onClick={() => clickMe(props.test.datas.length)}>click me</button>
      
      <br></br>

       <button className="btn btn-danger" onClick={()=>props.updateModal({IsOpen:true,Content:TestContent})}>Show modal</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    test: state.testReducer,
  }
}

const mapDispatchActionToProps = (dispatch: any) => {
  return {
    // dispatching plain actions
    getTest: () => dispatch(getTest()),
    addTest: (value: any) => dispatch(addTest(value)),
    getModal: () => dispatch(getModal()),
    updateModal: (value: any) => dispatch(updateModal(value))
  }
}

export default connect(mapStateToProps, mapDispatchActionToProps)(BodyScreen)

