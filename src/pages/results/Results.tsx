import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
const Results: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen px-5 pt-10 md:px-10">
      <div className="justify-between hidden w-full px-4 h_result1 md:flex">
        <h1 className="text-white md:text-xl">Welcome, Chaiyaphat supharak</h1>
        <h1  className="font-bold text-white md:text-2xl">QSOFTTRACKING & TRACE</h1>
      </div>
      <div className="w-full p-4 bg-gray-50 h-25% flex flex-col md:flex-row md:items-center justify-between rounded-t-xl border-b-8 border-sepia-500">
        <FormControl variant="outlined" size="small" className="w-full md:w-45% xl:35%">
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
        <div className="w-3.5"/>
        <TextField placeholder="TRACKING ID" InputLabelProps={{ shrink: false }} className="w-full  md:w-45% xl:w-55%" id="outlined-multiline-static" size="small" variant="outlined" />
        <div className="w-3.5"/>
        <button className="self-end w-40 px-4 py-2 font-bold text-white rounded md:self-center bg-sepia-500 hover:bg-sepia-700 focus:outline-none focus:shadow-outline" type="submit">
          Search
        </button>
      </div>

      <div className="flex flex-col md:h_result3 md:flex-row h-75% border-t-4 border-sepia-500 bg-gray-50">
        <div className="h-35% md:h-100%  md:w-35% flex flex-row md:flex-col overflow-x-auto md:overflow-x-hidden md:overflow-y-scroll ">
          <div className="m-2 min-w-20 bg-indigo-50 md:min-h-10">1dsadas</div>
          <div className="m-2 min-w-20 bg-indigo-50 md:min-h-10">1dasdasdasd</div>
          <div className="m-2 min-w-20 bg-indigo-50 md:min-h-10">1saSAsaS</div>
          <div className="m-2 min-w-20 bg-indigo-50 md:min-h-10">1dsadasdasd</div>
        </div>
        <div className="w-100% h-65%  md:w-65%  md:h-100% overflow-y-auto">
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          orem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsadorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsadorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsadorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsadorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsadorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
        Lorem ipsumdasdsadasdasd dolor sit amet consectetur adipisicing elit. Facere quas reiciendis recusandae natus debitis velit! Tempora maxime ducimus praesentium sed tenetur, illum eius eum facere. Explicabo cum cumque molestiae veniam.  
          Lorem ipsumdasdsad
        </div>
        <div />
      </div>
    </div>
  )
}

export default Results
