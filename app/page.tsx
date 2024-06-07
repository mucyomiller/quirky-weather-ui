"use client";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, CloudRain, Droplets, Eye, MapPin, Navigation2, Shell, Sun, Thermometer, ThermometerSun, Wind } from "lucide-react";

export default function Home() {
  return (
    // <motion.div className="bg-gray-400 text-white p-4 m-20 rounded-3xl">
    //   <LocationHeader />
    //   <CurrentWeather />
    //   <HourlyForecast />
    //   <DailyForecast />
    // </motion.div>

    <div className="min-h-screen bg-[url('/assets/background.jpg')] bg-cover flex items-center justify-center">
      <div className="p-6 rounded-lg bg-black bg-opacity-40  shadow-lg w-full max-w-6xl flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <Input icon={MapPin} className="bg-gray-600 border-b-2 rounded-2xl border-transparent text-white placeholder-white" placeholder="Kigali, Rwanda" />
          </div>

          <div className="bg-black bg-opacity-20 p-6 rounded-lg text-center text-white">
            <h1 className="text-6xl">28°</h1>
            <p className="mt-2 text-2xl">Rainy Day</p>
            <p className="mt-2 mb-16 text-sm">Today, expect a rainy day with temperatures reaching a maximum of 28°C. Make sure to grab your umbrella and raincoat before heading out.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white flex flex-col items-start">
                <div className="flex flex-row">
                  <Thermometer className="text-white mr-3" />
                  <h2 className="text-xl">Feels Like</h2>
                </div>

                <div>
                  <p className="text-4xl mt-2">30°</p>
                  <p className="mt-1">Humidity is making it feel warmer</p>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white flex flex-col items-start">

                <div className="flex flex-row">
                  <CloudRain className="text-white mr-3" />
                  <h2 className="text-xl">Precipitation</h2>
                </div>
                <div>
                  <p className="text-4xl mt-2">2.3”</p>
                  <p className="mt-1">in the last 24h</p>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white flex flex-col items-start">
                <div className="flex flex-row">
                  <Eye className="text-white mr-3" />
                  <h2 className="text-xl">Visibility</h2>
                </div>

                <div>
                  <p className="text-4xl mt-2">6 mi</p>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white flex flex-col items-start">
                <div className="flex flex-row">
                  <Droplets className="text-white mr-3" />
                  <h2 className="text-xl">Humidity</h2>
                </div>
                <div>
                  <p className="text-4xl mt-2">82%</p>
                  <p className="mt-1">The dew point is 25° right now</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Hourly Forecast */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white">
            <div className="flex flex-row">
              <Clock className="text-white mr-3" />
              <h2 className="text-lg">HOURLY FORECAST</h2>
            </div>
            <Separator className="my-2" />
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-4 p-4">
                {/* hourly forecast data */}
                {["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((time, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <p>{time}</p>
                    <p>28°</p>
                    <CloudRain className="text-white" />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* 10-Day Forecast */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white">
            <div className="flex flex-row">
              <Calendar className="text-white mr-3" />
              <h2 className="text-lg">10-DAY FORECAST</h2>
            </div>
            <Separator className="my-2" />
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-4 p-4 gap-2">
                {/* daily forecast data */}
                {["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"].map(
                  (day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <p>{day}</p>
                      <Sun className="text-white" />
                      <p>28°</p>
                    </div>
                  )
                )}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="flex flex-row gap-6">
            {/* UV Index */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white basis-1/2">
              <div className="flex flex-row">
                <ThermometerSun className="text-white mr-3" />
                <h2 className="text-xl mb-4">UV INDEX</h2>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-2xl">3</p>
                  <p className="mt-1">Moderate</p>
                </div>
              </div>
            </div>


            {/* Wind */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white basis-1/2">
              <div className="flex flex-row">
                <Wind className="text-white mr-3" />
                <h2 className="text-xl mb-4">WIND</h2>
              </div>
              <div className="flex items-center">
                <Shell className="text-white mr-3" />
                <span className="text-3xl mr-2">3</span>
                <div className="flex flex-col">
                  <p className="text-xl">MPH</p>
                  <p className="mt-1 text-xl">Wind</p>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center mt-4">
                <Navigation2 className="text-white mr-3" />
                <span className="text-3xl mr-2">9</span>
                <div>
                  <p className="text-2xl">MPH</p>
                  <p className="mt-1 text-xl">Gusts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
