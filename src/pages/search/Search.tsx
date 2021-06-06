import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
function Search() {
  const history = useHistory()
  return (
    <div className="flex items-center justify-center h-screen md:flex-col ">
      <div className="justify-between hidden pb-3 bg-transparentlg:px-10 w-custom1 md:flex h-custom20 md:items-end">
        <h1 className="text-white md:text-xl font-Prompt">Welcome Chaiyaphat supharak</h1>
        <h1 className="text-white md:text-2xl md:font-bold">QSOFTTRACK && TRAC</h1>
      </div>
      <div className="flex flex-col items-center justify-start rounded-t-xl md:justify-start md:items-center bg-gray-50 w-custom1 h-custom80 ">
        <div className="w-1 h-7" />
        <h1 className="text-4xl text-center md:hidden text-sepia-800">QSoft Tracking</h1>
        <div className="h-7" />
        <div className="flex flex-col items-center justify-center w-10/12 ">
          <FormControl variant="outlined" size="small" className="w-full">
            <InputLabel>Company</InputLabel>
            <Select labelId="selectId" id="selectId" label="Company">
              <MenuItem value="">
                <h1>โปรดระบุบริษัท</h1>
              </MenuItem>
              <MenuItem value={'id1'}>
                <h1 className="text-xs md:text-lg font-Prompt">บริษัท เกษตรไทย อินเตอร์เนชั่นแนล ชูการ์ คอร์ปอเรชั่น1</h1>
              </MenuItem>
              <MenuItem value={'id1'}>
                <h1 className="text-xs md:text-lg ">บริษัท เกษตรไทย อินเตอร์เนชั่นแนล ชูการ์ คอร์ปอเรชั่น1</h1>
              </MenuItem>
            </Select>
          </FormControl>
          <div className="h-7" />
          <TextField placeholder="TRACKING ID" InputLabelProps={{ shrink: false }} className="w-full " id="outlined-multiline-static" multiline rows={8} variant="outlined" />
          <button onClick={()=>history.push('/results')} className="self-end w-40 px-4 py-2 font-bold text-white rounded mt-7 bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
