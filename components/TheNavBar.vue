<template>
  <header class="flex items-center justify-center sm:justify-between px-4 bg-white py-3">
    <div class="w-32 hidden sm:block">
      <a href="#">
        <img class="hidden lg:block" src="@/assets/svgs/logo.svg" alt="meetup">
        <svg class="block lg:hidden text-red-600 w-12" stroke="none" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" d="M6.98.555a.518.518 0 00-.105.011.53.53 0 10.223 1.04.533.533 0 00.408-.633.531.531 0 00-.526-.418zm6.455.638a.984.984 0 00-.513.143.99.99 0 101.02 1.7.99.99 0 00.34-1.36.992.992 0 00-.846-.483zM10.407 3.43a5.029 5.029 0 00-4.668 3.248 3.33 3.33 0 00-1.46.55 3.374 3.374 0 00-.94 4.563 3.634 3.634 0 00-.606 4.649 3.603 3.603 0 002.465 1.597c.018.732.238 1.466.686 2.113a3.9 3.9 0 005.424.993c.067-.047.12-.106.183-.157.987.881 2.471 1.026 3.608.24a2.91 2.91 0 001.162-1.69 4.238 4.238 0 002.584-.74 4.274 4.274 0 001.19-5.788 2.466 2.466 0 00.433-3.309 2.448 2.448 0 00-1.317-.933 4.436 4.436 0 00-.775-2.873 4.467 4.467 0 00-5.195-1.657 5.106 5.106 0 00-2.774-.806zm-5.603.816a.759.759 0 00-.424.135.758.758 0 10.863 1.248.757.757 0 00.194-1.055.758.758 0 00-.633-.328zm15.994 2.371a.842.842 0 00-.47.15.845.845 0 101.175.215.845.845 0 00-.705-.365zm-8.15 1.027c.063 0 .124.006.181.014a.901.901 0 01.451.188c.169.134.273.24.432.392.24.228.413.09.533.02.208-.121.37-.218.985-.207.633.01 1.362.236 1.513 1.316.168 1.2-1.965 4.29-1.816 5.723.105 1.01 1.815.298 1.959 1.22.187 1.197-2.135.752-2.666.493-.832-.408-1.337-1.34-1.121-2.26.161-.688 1.7-3.498 1.758-3.93.058-.44-.178-.477-.325-.484-.19-.01-.339.08-.525.361-.17.256-2.082 4.086-2.248 4.399-.297.559-.67.693-1.045.673-.547-.028-.798-.32-.719-.847.047-.31 1.26-3.05 1.323-3.477.038-.264-.014-.545-.276-.68-.262-.134-.571.07-.664.227-.128.215-1.848 4.707-2.031 5.04-.317.575-.651.759-1.152.782-1.187.056-2.066-.919-1.678-2.115.173-.533 1.316-4.572 1.894-5.6C7.8 8.202 8.878 7.676 9.627 8c.388.168.925.438 1.084.508.366.162.76-.278.914-.412.155-.135.302-.277.49-.358.141-.06.343-.094.531-.094zm10.88 2.057a.468.468 0 00-.093.012.467.467 0 00-.36.555.47.47 0 00.557.359.47.47 0 00.36-.557.47.47 0 00-.464-.369zm-22.52.81a.997.997 0 00-.831.434 1 1 0 101.39-.258 1 1 0 00-.558-.175zm21.296 2.094a.635.635 0 00-.127.014.627.627 0 00-.48.746.628.628 0 00.746.483.628.628 0 00.482-.747.63.63 0 00-.621-.496zm-18.24 6.098a.453.453 0 00-.092.012.464.464 0 10.195.908.464.464 0 00.355-.553.466.466 0 00-.459-.367zm13.675 1.55a1.044 1.044 0 00-.584.186 1.047 1.047 0 101.457.266 1.044 1.044 0 00-.873-.451zM11.4 22.155a.643.643 0 00-.36.115.646.646 0 00-.163.899.646.646 0 00.898.164.646.646 0 00.164-.898.646.646 0 00-.539-.28z"></path></svg>
      </a>
    </div>
    <nav>
      <ul class="flex items-center text-sm text-gray-600 space-x-6">
        <li class="pr-4 border-r border-gray-400 hidden sm:block">
          <a href="#" class="text-red-600 font-semibold tracking-wide">
            Start a new group
          </a>
        </li>
        <li class="flex items-center flex-col">
          <svg  class="w-8 h-8 block sm:hidden" 
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
                  stroke-width="1" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <a href="#" class="hover:text-red-600 font-light tracking-wide">Explore</a>
        </li>
        <li class="block sm:hidden">
          <div  class="flex items-center flex-col">
            <svg  class="w-8 h-8" 
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
                    stroke-width="1" 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <a href="#" class="hover:text-red-600 font-light tracking-wide">Groups</a>
          </div>
        </li>
        <li class="flex items-center flex-col">
          <svg  class="w-8 h-8 block sm:hidden" 
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
                  stroke-width="1" 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <a href="#" class="hover:text-red-600 font-light tracking-wide text-xs sm:text-sm">Messages</a>
        </li>
        <li class="relative flex items-center flex-col">
          <svg  class="w-8 h-8 block sm:hidden"
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
                  stroke-width="1" 
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
            </path>
          </svg>
          <a href="#" class="hover:text-red-600 font-light tracking-wide text-xs sm:text-sm">Notifications</a>
          <div class="absolute right-0 top-0 bg-green-400 w-2 h-2 rounded-full hidden sm:block" style="right: -10px"></div>
        </li>
        <li>
          <a href="#" class="flex items-center flex-col sm:flex-row">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 object-cover rounded-full" src="https://avatars3.githubusercontent.com/u/38458781?s=460&u=8fc4b0725bdcdd4624fc99ac4fb4ac64ee8768cc&v=4" alt="avatar">
            </div>
            <div>
              <span class="block sm:hidden font-light text-xs">Profile</span>
              <svg  class="ml-1 w-3 h-3 text-gray-400 hidden sm:block"   
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