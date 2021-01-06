<template>
  <header class="flex items-center justify-between px-4 bg-white py-3 ">
    <div class="w-32">
      <a href="#">
        <img src="@/assets/svgs/logo.svg" alt="meetup">
      </a>
    </div>
    <nav>
      <ul class="flex items-center text-sm text-gray-600 space-x-6">
        <li class="pr-4 border-r border-gray-400">
          <a href="#" class="text-red-600 font-semibold tracking-wide">
            Start a new group
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-red-600 font-light tracking-wide">Explore</a>
        </li>
          <li>
          <a href="#" class="hover:text-red-600 font-light tracking-wide">Messages</a>
        </li>
          <li class="relative">
          <a href="#" class="hover:text-red-600 font-light tracking-wide">Notifications</a>
          <div class="absolute right-0 top-0 bg-green-400 w-2 h-2 rounded-full" style="right: -10px"></div>
        </li>
        <li>
          <a href="#" class="flex items-center">
            <div>
              <img class="w-8 h-8 object-cover rounded-full" src="https://avatars3.githubusercontent.com/u/38458781?s=460&u=8fc4b0725bdcdd4624fc99ac4fb4ac64ee8768cc&v=4" alt="avatar">
            </div>
            <div>
              <svg  class="ml-1 w-3 h-3 text-gray-400"   
                    stroke="currentColor" 
                    fill="none" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    preserveAspectRatio="xMidYMid meet" 
                    data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio">
                <path xmlns="http://www.w3.org/2000/svg" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2.5" 
                      d="M19 9l-7 7-7-7">
                </path>
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>