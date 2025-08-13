<template>
  <div class="max-w-3xl mx-auto p-6 bg-gray-900 text-gray-200 space-y-6 rounded-lg shadow-lg">
    
    <div class="text-center space-y-2">
      <h2 class="text-3xl font-bold text-primary">Contact Us</h2>
      <p class="text-gray-400">This form is not working, only for visual effect</p>
    </div>

    <form action="" class="space-y-4">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="relative">
          <input 
            type="text" 
            name="firstname" 
            id="firstname" 
            placeholder="First Name"
            class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
          />
        </div>
        <div class="relative">
          <input 
            type="text" 
            name="lastname" 
            id="lastname" 
            placeholder="Last Name"
            class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Email"
          class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <input 
          type="tel" 
          name="phone" 
          id="phone" 
          placeholder="Phone"
          class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <textarea 
          name="message" 
          id="message" 
          placeholder="Message" 
          rows="5"
          class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-accent resize-none"
        ></textarea>
      </div>
      <div class="text-center">
        <button 
          type="submit" 
          class="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>

    </form>
  </div>
</template>

