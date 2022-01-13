import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'
import {
  TextInput,
  InvalidTextInput,
  ValidTextInput
} from '../../components/forms/text-inputs'
import { Select, InvalidSelect, ValidSelect } from '../../components/forms/selects-copy'
import { Radio, InvalidRadio, ValidRadio } from '../../components/forms/radios'
import {
  Checkbox,
  InvalidCheckbox,
  ValidCheckbox
} from '../../components/forms/checkboxes'
import { FiCheck } from 'react-icons/fi'
import { useState } from 'react'

const Index = () => {
  const [toggleel, setToggle] = useState('hidden')
  const [togglee2, setToggle2] = useState('hidden')
  const [togglee3, setToggle3] = useState('hidden')
  const [togglee4, setToggle4] = useState('hidden')
  const [togglee5, setToggle5] = useState('hidden')
  const [togglee6, setToggle6] = useState('hidden')
  const [togglee7, setToggle7] = useState('hidden')
  const [togglee8, setToggle8] = useState('hidden')
  const [togglee9, setToggle9] = useState('hidden')
  const [togglee10, setToggle10] = useState('hidden')
  const [togglee11, setToggle11] = useState('hidden')
  const [togglee12, setToggle12] = useState('hidden')

  const onChange = e => {
    let toggleval = ' '
    setToggle(toggleval)
  };

  const onChange2 = e => {
    let toggleval = 'hidden'
    setToggle(toggleval)
  };

  const onChange3 = e => {
    let toggleval = ' '
    setToggle2(toggleval)

  };
  const onChange4 = e => {
    let toggleval = 'hidden'
    setToggle2(toggleval)

  };
  const onChange5 = e => {
    let toggleval = ' '
    setToggle3(toggleval)
  };

  const onChange6 = e => {
    let toggleval = 'hidden'
    setToggle3(toggleval)
  };
  const onChange7 = e => {
    let toggleval = ' '
    setToggle4(toggleval)

  };
  const onChange8 = e => {
    let toggleval = 'hidden'
    setToggle4(toggleval)

  };
  const onChange9 = e => {
    let toggleval = ' '
    setToggle5(toggleval)
  };

  const onChange10 = e => {
    let toggleval = 'hidden'
    setToggle5(toggleval)
  };
  const onChange11 = e => {
    let toggleval = ' '
    setToggle6(toggleval)

  };
  const onChange12 = e => {
    let toggleval = 'hidden'
    setToggle6(toggleval)

  };
  const onChange13 = e => {
    let toggleval = ' '
    setToggle7(toggleval)
  };

  const onChange14 = e => {
    let toggleval = 'hidden'
    setToggle7(toggleval)
  };
  const onChange15 = e => {
    let toggleval = ' '
    setToggle8(toggleval)

  };
  const onChange16 = e => {
    let toggleval = 'hidden'
    setToggle8(toggleval)

  };
  const onChange17 = e => {
    let toggleval = ' '
    setToggle9(toggleval)
  };

  const onChange18 = e => {
    let toggleval = 'hidden'
    setToggle9(toggleval)
  };
  const onChange19 = e => {
    let toggleval = ' '
    setToggle10(toggleval)

  };
  const onChange20 = e => {
    let toggleval = 'hidden'
    setToggle10(toggleval)

  };
  const onChange21 = e => {
    let toggleval = ' '
    setToggle11(toggleval)
  };

  const onChange22 = e => {
    let toggleval = 'hidden'
    setToggle11(toggleval)
  };
  const onChange23 = e => {
    let toggleval = ' '
    setToggle12(toggleval)

  };
  const onChange24 = e => {
    let toggleval = 'hidden'
    setToggle12(toggleval)

  };

  return (
    <>
      <div className="block p-6 rounded-lg bg-white w-full">
        <p className="mb-3 font-bold">Current Residential address</p>
        <form>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="House/Plot No" />
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Street" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Town/Area" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="LGA" />
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
            </div>

            <div className="form-check form-check-inline ml-5">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Annual rent" />
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Name of owner" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Phone number" />
            </div>
          </div>

        </form>
      </div>


      <h6 className="p-2">Income details</h6>
      <Widget>
        <div>
          <form >
            <div className="flex justify-between mb-5">
              <p>Were you employed ? </p>
              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onClick={onChange} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onClick={onChange2} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>
              </div>
            </div>

            <div className={`block p-6 rounded-lg bg-white w-full ${toggleel}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Were you self employed ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onClick={onChange3} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onClick={onChange4} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>
              </div>
            </div>

            <div className={`block p-6 rounded-lg bg-white w-full ${togglee2}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>


            <div className="flex justify-between mb-5">

              <p>Were you in a patnership ? </p>


              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange5} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange6} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions3" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`block p-6 rounded-lg bg-white w-full ${togglee3}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive income on rent ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange7} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange8} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>

            </div>


            <div className={`block p-6 rounded-lg bg-white w-full ${togglee4}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">


              <p>Did you receive any bank interest ? </p>


              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange9} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange10} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>

            </div>

            
            <div className={`block p-6 rounded-lg bg-white w-full ${togglee5}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive any bank dividends from a Nigerian Company ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange11} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange12} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`block p-6 rounded-lg bg-white w-full ${togglee6}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive Pension ? </p>


              <div className="flex">
                <div className="form-check form-check-inline">
                  <input onChange={onChange13} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange14} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>
              </div>
            </div>
            <div className={`block p-6 rounded-lg bg-white w-full ${togglee7}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you make profit on sale of asset ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange15} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div onChange={onChange16} className="form-check form-check-inline ml-5">
                  <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`block p-6 rounded-lg bg-white w-full ${togglee8}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

            <div className="flex justify-between mb-5">


              <p>Did you receive any income from sources outside Nigeria ? </p>


              <div className="flex">

                <div className="form-check form-check-inline flex ustify-evenly">
                  <input onChange={onChange17} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange18} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`block p-6 rounded-lg bg-white w-full ${togglee9}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

          </form>

        </div>
      </Widget>

      <h6 className="p-2">Deductions</h6>
      <Widget>
        <form>

          <div className="flex justify-between mb-5">


            <p>Did you contribute towards pension ? </p>


            <div className="flex">

              <div className="form-check form-check-inline flex ustify-evenly">
                <input onChange={onChange19} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
              </div>

              <div className="form-check form-check-inline ml-5">
                <input onChange={onChange20} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
              </div>

            </div>
          </div>

          <div className={`block p-6 rounded-lg bg-white w-full ${togglee10}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

          <div className="flex justify-between mb-5">


            <p>Did you contribute towards Life Asurrance ? </p>


            <div className="flex">

              <div className="form-check form-check-inline flex ustify-evenly">
                <input onChange={onChange21} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
              </div>

              <div className="form-check form-check-inline ml-5">
                <input onChange={onChange22} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
              </div>

            </div>
          </div>

          <div className={`block p-6 rounded-lg bg-white w-full ${togglee11}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

          <div className="flex justify-between mb-5">
            <p>Did you contribute towards NHIS ? </p>
            <div className="flex">

              <div className="form-check form-check-inline flex ustify-evenly">
                <input onChange={onChange23} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
              </div>

              <div className="form-check form-check-inline ml-5">
                <input onChange={onChange24} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
              </div>
            </div>
          </div>

          <div className={`block p-6 rounded-lg bg-white w-full ${togglee12}`}>
              <p className="mb-3 font-bold">Current Residential address</p>
              <form>
                <div className="grid grid-cols-3 gap-4">
                  <div className="mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="House/Plot No" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Street" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Town/Area" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="LGA" />
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Owner</label>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Annual rent" />
                  </div>

                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Name of owner" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control w-full rounded"
                      placeholder="Phone number" />
                  </div>
                </div>

              </form>
            </div>

          <div className="flex justify-center">
            <button
              style={{ backgroundColor: "#84abeb" }}
              className="btn w-32 btn-default text-white btn-outlined bg-transparent rounded-md mx-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Widget>
    </>
  )
}
export default Index
