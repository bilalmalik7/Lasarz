'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
    BarChart, Bar, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    PieChart, Pie, Cell
} from 'recharts';
import { marketData } from '@/lib/marketData';

export default function DashboardClient() {
    const [selectedCityId, setSelectedCityId] = useState(marketData[0].id);

    const activeData = marketData.find(d => d.id === selectedCityId) || marketData[0];

    return (
        <div style={{ marginTop: '-40px' }}>
            {/* Control Panel / City Selector */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch', whiteSpace: 'nowrap' }}>
                {marketData.map((city) => (
                    <button
                        key={city.id}
                        onClick={() => setSelectedCityId(city.id)}
                        style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '50px',
                            border: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backgroundColor: selectedCityId === city.id ? 'var(--accent-primary)' : 'transparent',
                            color: selectedCityId === city.id ? 'white' : 'var(--text-secondary)',
                            boxShadow: selectedCityId === city.id ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                        }}
                    >
                        {city.name}
                    </button>
                ))}
            </div>

            {/* Main Interactive Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Upper Description Block */}
                    <div className="glass-card" style={{ padding: '2rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)' }}>Aktueller Status: {activeData.name}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{activeData.description}</p>
                    </div>

                    {/* KPI Cards (5 Items) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        
                        <div className="glass-card" style={{ padding: '2rem 1rem', textAlign: 'center', borderTop: '4px solid var(--accent-secondary)' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Ø Kaufpreis</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                {activeData.currentAvg} € <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>/m²</span>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem 1rem', textAlign: 'center', borderTop: '4px solid var(--accent-primary)' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Preis Trend (YOY)</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: activeData.trendYoy.startsWith('+') ? '#10B981' : '#EF4444' }}>
                                {activeData.trendYoy}
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem 1rem', textAlign: 'center', borderTop: '4px solid var(--text-primary)' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Nachfrage Level</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                {activeData.demandLevel}
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem 1rem', textAlign: 'center', borderTop: '4px solid #F59E0B' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Marktstatus</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'inherit', marginTop: '0.5rem' }}>
                                {activeData.marketType}
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem 1rem', textAlign: 'center', borderTop: '4px solid #8B5CF6' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Vermarktungsdauer</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8B5CF6' }}>
                                Ø {activeData.avgTimeOnMarket}
                            </div>
                        </div>
                    </div>

                    {/* Primary Interactive Charts */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
                        
                        {/* Line Chart: Price History */}
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                Kaufpreisentwicklung (2019 - 2024)
                                <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>Mittelwert / m²</span>
                            </h3>
                            <div style={{ width: '100%', height: '350px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={activeData.trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)', fontSize: 13}} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)', fontSize: 13}} />
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                            labelStyle={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem' }}
                                            itemStyle={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}
                                            formatter={(value: any) => [`${value} €`, 'Kaufpreis/m²']}
                                        />
                                        <Area type="monotone" dataKey="price" stroke="var(--accent-primary)" strokeWidth={4} fillOpacity={1} fill="url(#colorPrice)" animationDuration={1000} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Property Quality & Investment Index - Radar Chart */}
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                Makro-Qualitätsindex
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Lokaler Scoring-Wert im Städtevergleich (0 - 100)</p>
                            <div style={{ width: '100%', height: '350px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={activeData.qualityIndex}>
                                        <PolarGrid stroke="rgba(0,0,0,0.1)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 12, fontWeight: 500 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                        <Radar name={activeData.name} dataKey="A" stroke="var(--accent-secondary)" strokeWidth={3} fill="var(--accent-secondary)" fillOpacity={0.3} animationDuration={1000} />
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                            itemStyle={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}
                                            formatter={(value: any) => [`${value} / 100`, 'Score']}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </div>

                    {/* Secondary Charts Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>

                        {/* Bar Chart: Property Types */}
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                                Werte nach Immobilientyp
                            </h3>
                            <div style={{ width: '100%', height: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={activeData.propertyTypes} layout="vertical" margin={{ top: 0, right: 20, left: 30, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="rgba(0,0,0,0.05)" />
                                        <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: 'var(--text-muted)'}} />
                                        <YAxis dataKey="type" type="category" axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 13}} width={120} />
                                        <Tooltip 
                                            cursor={{fill: 'rgba(26, 117, 141, 0.05)'}}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                            formatter={(value: any) => [`${value} €/m²`, 'Marktwert']}
                                        />
                                        <Bar dataKey="price" fill="var(--accent-primary)" radius={[0, 4, 4, 0]} barSize={25} animationDuration={1000} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Pie Chart: Sales Distribution */}
                        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                                Verkaufte Einheiten (Verteilung)
                            </h3>
                            <div style={{ width: '100%', flexGrow: 1, minHeight: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={activeData.salesDistribution}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                            animationDuration={1000}
                                        >
                                            {activeData.salesDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                            ))}
                                        </Pie>
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                            formatter={(value: any) => [`${value}%`, 'Marktanteil']}
                                        />
                                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </div>

                    {/* Executive Forecast Section */}
                    <div className="glass-card" style={{ padding: '3rem', borderLeft: '6px solid var(--accent-primary)', background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,250,255,1) 100%)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                📊
                            </div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0 }}>GUTACHTER-PROGNOSE 2024/2025</h3>
                        </div>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            {activeData.forecastText}
                        </p>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>
    );
}
