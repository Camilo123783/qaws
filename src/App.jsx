const App = () => {
  return (
    <div className="flex bg-[url('./assets/images/2.png')] bg-contain bg-no-repeat align-super">
      <br/>
      <div className="bg-[url('./assets/images/tulo.png')] ">
        <header className="container mx-auto px-4">
          <div className="flex justify-between pt-8">
            <h1 className="uppercase text-2xl font-semibold text-white tracking-[0.3em]">TODO</h1>
            <button>Luna</button>
          </div>
          <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 mt-8">
            <input className="text-gray-700 outline-none " type="text" placeholder="Type a message..." />
            <span className="inline-block h-5 w-5 rounded-full border-2 bg-indigo-900"></span>
          </form>
        </header>
      </div>



      <br /><br /><br /><br /><br /><br /><br /><br />

      <main>
        <div>
          <h3 className="uppercase text-2xl font-semibold text-purple-700 tracking-[0.3em]">
            Simple booking
          </h3>
          <h6 className="uppercase font-semibold text-gray-500 tracking-[0.1em]">
            <p> Stay in touch with our dog walkers</p>
            <p> though the chat interface. This makes it</p>
            <p> easy to discuss arrangements and make</p>
            <p> bookings. Once the walk has been</p>
            <p> complete you can rate your walker and</p>
            <p> book again all though the chat.</p>
          </h6>
        </div>
      </main>

    </div>

  )

}
export default App;