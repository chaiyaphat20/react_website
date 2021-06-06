import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
function Search() {
  return (
    <div className="flex items-center justify-center h-screen md:flex-col ">
      <div className="justify-between hidden mb-2 bg-transparent lg:px-10 w-custom1 md:flex">
        <h1 className="text-white md:text-xl font-Prompt">Welcome Chaiyaphat supharak</h1>
        <h1 className="text-white md:text-2xl md:font-bold">QSOFTTRACK && TRAC</h1>
      </div>
      <div className="flex flex-col md:justify-center md:flex-row bg-gray-50 w-custom1 h-custom2">
        <h1 className="text-4xl text-center md:hidden text-sepia-800">QSoft Tracking</h1>

        <div className="flex items-center justify-center w-full h-14 md:w-10/12 bg-sepia-200">
        <FormControl variant="outlined" size="small">
          <InputLabel id="labelId">Company</InputLabel>
          <Select labelId="selectId" id="selectId" label="Company">
            <MenuItem value="">
              <h1>โปรดระบุบริษัท</h1>
            </MenuItem>
            <MenuItem value={'id1'}>
              <h1  className="text-xs md:text-xl xl:text-2xl font-Prompt">บริษัท เกษตรไทย อินเตอร์เนชั่นแนล ชูการ์ คอร์ปอเรชั่น1</h1>
            </MenuItem>
            <MenuItem value={'id1'}>
              <h1  className="text-xs md:text-xl xl:text-2xl">บริษัท เกษตรไทย อินเตอร์เนชั่นแนล ชูการ์ คอร์ปอเรชั่น1</h1>
            </MenuItem>
          </Select>
        </FormControl>
        </div>

      </div>
    </div>
  )
}

export default Search
