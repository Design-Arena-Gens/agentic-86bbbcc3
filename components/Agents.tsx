'use client'

import React, { useState } from 'react'

const agentsData = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@agentbpo.com', role: 'Senior Agent', department: 'Customer Support', status: 'Active', tasks: 156, rating: 4.9, avatar: 'SJ' },
  { id: 2, name: 'Mike Chen', email: 'mike.c@agentbpo.com', role: 'Team Lead', department: 'Data Entry', status: 'Active', tasks: 143, rating: 4.8, avatar: 'MC' },
  { id: 3, name: 'Emily Davis', email: 'emily.d@agentbpo.com', role: 'Agent', department: 'Quality Assurance', status: 'Active', tasks: 138, rating: 4.9, avatar: 'ED' },
  { id: 4, name: 'James Wilson', email: 'james.w@agentbpo.com', role: 'Senior Agent', department: 'Email Management', status: 'Away', tasks: 125, rating: 4.7, avatar: 'JW' },
  { id: 5, name: 'Lisa Brown', email: 'lisa.b@agentbpo.com', role: 'Agent', department: 'Research', status: 'Active', tasks: 112, rating: 4.6, avatar: 'LB' },
  { id: 6, name: 'David Martinez', email: 'david.m@agentbpo.com', role: 'Junior Agent', department: 'Customer Support', status: 'Offline', tasks: 89, rating: 4.5, avatar: 'DM' },
  { id: 7, name: 'Anna Thompson', email: 'anna.t@agentbpo.com', role: 'Agent', department: 'Data Entry', status: 'Active', tasks: 134, rating: 4.8, avatar: 'AT' },
  { id: 8, name: 'Robert Garcia', email: 'robert.g@agentbpo.com', role: 'Team Lead', department: 'Quality Assurance', status: 'Active', tasks: 167, rating: 4.9, avatar: 'RG' },
]

export default function Agents() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterDepartment, setFilterDepartment] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')

  const departments = ['All', 'Customer Support', 'Data Entry', 'Quality Assurance', 'Email Management', 'Research']
  const statuses = ['All', 'Active', 'Away', 'Offline']

  const filteredAgents = agentsData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = filterDepartment === 'All' || agent.department === filterDepartment
    const matchesStatus = filterStatus === 'All' || agent.status === filterStatus
    return matchesSearch && matchesDepartment && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Agents</h1>
          <p className="text-gray-500">Manage your BPO workforce</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Agent
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-semibold">
                  {agent.avatar}
                </div>
                <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${
                  agent.status === 'Active' ? 'bg-green-500' :
                  agent.status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'
                }`}></span>
              </div>
              <h3 className="font-semibold text-gray-800">{agent.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{agent.role}</p>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full mb-4">
                {agent.department}
              </span>
              
              <div className="w-full pt-4 border-t border-gray-100 flex justify-between text-sm">
                <div>
                  <p className="font-semibold text-gray-800">{agent.tasks}</p>
                  <p className="text-gray-500">Tasks</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-800">{agent.rating}</span>
                  </div>
                  <p className="text-gray-500">Rating</p>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    agent.status === 'Active' ? 'bg-green-100 text-green-700' :
                    agent.status === 'Away' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {agent.status}
                  </span>
                  <p className="text-gray-500 mt-1">Status</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAgents.length === 0 && (
        <div className="card text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No agents found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}
