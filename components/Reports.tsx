'use client'

import React, { useState } from 'react'

const performanceData = [
  { month: 'Jan', tasks: 320, completed: 290, satisfaction: 92 },
  { month: 'Feb', tasks: 380, completed: 350, satisfaction: 94 },
  { month: 'Mar', tasks: 420, completed: 395, satisfaction: 93 },
  { month: 'Apr', tasks: 450, completed: 420, satisfaction: 95 },
  { month: 'May', tasks: 480, completed: 460, satisfaction: 96 },
  { month: 'Jun', tasks: 510, completed: 485, satisfaction: 94 },
]

const departmentMetrics = [
  { name: 'Customer Support', tasks: 1250, avgTime: '2.5h', satisfaction: 95, efficiency: 92 },
  { name: 'Data Entry', tasks: 980, avgTime: '1.8h', satisfaction: 94, efficiency: 96 },
  { name: 'Quality Assurance', tasks: 720, avgTime: '3.2h', satisfaction: 97, efficiency: 89 },
  { name: 'Email Management', tasks: 850, avgTime: '1.2h', satisfaction: 93, efficiency: 94 },
  { name: 'Research', tasks: 420, avgTime: '4.5h', satisfaction: 96, efficiency: 88 },
]

const topPerformers = [
  { name: 'Sarah Johnson', tasks: 156, avgRating: 4.9, efficiency: 98 },
  { name: 'Robert Garcia', tasks: 167, avgRating: 4.9, efficiency: 97 },
  { name: 'Mike Chen', tasks: 143, avgRating: 4.8, efficiency: 96 },
  { name: 'Emily Davis', tasks: 138, avgRating: 4.9, efficiency: 95 },
  { name: 'Anna Thompson', tasks: 134, avgRating: 4.8, efficiency: 94 },
]

export default function Reports() {
  const [timeRange, setTimeRange] = useState('6months')
  const [reportType, setReportType] = useState('performance')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-500">Analytics and performance insights</p>
        </div>
        <div className="flex gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
          <button className="btn-primary flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Report
          </button>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">
        {['performance', 'agents', 'clients', 'financial'].map((type) => (
          <button
            key={type}
            onClick={() => setReportType(type)}
            className={`px-4 py-2 rounded-lg capitalize transition-all ${
              reportType === type
                ? 'bg-white text-primary-700 shadow-sm font-medium'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Total Tasks</span>
            <span className="text-green-600 text-sm font-medium">+18%</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">2,560</p>
          <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
          </div>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Completion Rate</span>
            <span className="text-green-600 text-sm font-medium">+5%</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">94.2%</p>
          <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[94%] bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Avg Response Time</span>
            <span className="text-green-600 text-sm font-medium">-12%</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">2.3h</p>
          <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Client Satisfaction</span>
            <span className="text-green-600 text-sm font-medium">+3%</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">4.8/5</p>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-yellow-200'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Performance Trend</h3>
          <div className="h-64 flex items-end gap-4">
            {performanceData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex-1 flex items-end gap-1">
                  <div 
                    className="flex-1 bg-primary-200 rounded-t"
                    style={{ height: `${(data.tasks / 510) * 100}%` }}
                  ></div>
                  <div 
                    className="flex-1 bg-primary-500 rounded-t"
                    style={{ height: `${(data.completed / 510) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary-200"></div>
              <span className="text-sm text-gray-600">Total Tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary-500"></div>
              <span className="text-sm text-gray-600">Completed</span>
            </div>
          </div>
        </div>

        {/* Satisfaction Trend */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Satisfaction Score</h3>
          <div className="h-64 flex items-end gap-4">
            {performanceData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex-1 flex items-end">
                  <div 
                    className="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                    style={{ height: `${data.satisfaction}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Average: 94.2%</span>
          </div>
        </div>
      </div>

      {/* Department Metrics */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Department Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-500 text-sm">
                <th className="px-6 py-4 font-medium">Department</th>
                <th className="px-6 py-4 font-medium">Tasks Completed</th>
                <th className="px-6 py-4 font-medium">Avg Time</th>
                <th className="px-6 py-4 font-medium">Satisfaction</th>
                <th className="px-6 py-4 font-medium">Efficiency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {departmentMetrics.map((dept) => (
                <tr key={dept.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{dept.name}</td>
                  <td className="px-6 py-4 text-gray-600">{dept.tasks.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-600">{dept.avgTime}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${dept.satisfaction}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600">{dept.satisfaction}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-500 rounded-full"
                          style={{ width: `${dept.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600">{dept.efficiency}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Performers */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Top Performers</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {topPerformers.map((performer, index) => (
            <div key={performer.name} className="p-4 bg-gray-50 rounded-xl text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-semibold mb-3 ${
                index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                'bg-gradient-to-br from-primary-400 to-primary-600'
              }`}>
                {index + 1}
              </div>
              <h4 className="font-medium text-gray-800 mb-1">{performer.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{performer.tasks} tasks</p>
              <div className="flex items-center justify-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{performer.avgRating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
