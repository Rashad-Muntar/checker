const newActivity  = ({handleChange, handleSubmit}) => {
  return (
      <form onSubmit={handleSubmit}>
          <input handleChange={handleChange} type="text" placeholder="Enter your next Activity"/>
          <input handleChange={handleChange} type="dat"/>
          <button type="submit">Submit</button>
      </form>
  )  
}

export default newActivity