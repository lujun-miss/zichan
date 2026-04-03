
        document.addEventListener('DOMContentLoaded', function() {
            // 统计数据
            const statisticsData = {
                year: {
                    all: {
                        totalAssets: 1248,
                        totalAssetsGrowth: '5.2%',
                        rentalRate: '78.5%',
                        rentalRateGrowth: '3.1%',
                        idleAssets: 268,
                        idleAssetsGrowth: '2.8%',
                        expiringAssets: 5,
                        activatedAssets: 156,
                        activatedAssetsGrowth: '8.3%'
                    },
                    '房屋建筑': {
                        totalAssets: 856,
                        totalAssetsGrowth: '4.8%',
                        rentalRate: '82.3%',
                        rentalRateGrowth: '3.5%',
                        idleAssets: 185,
                        idleAssetsGrowth: '2.5%',
                        expiringAssets: 3,
                        activatedAssets: 112,
                        activatedAssetsGrowth: '7.8%'
                    },
                    '土地': {
                        totalAssets: 234,
                        totalAssetsGrowth: '6.2%',
                        rentalRate: '75.6%',
                        rentalRateGrowth: '2.8%',
                        idleAssets: 58,
                        idleAssetsGrowth: '3.2%',
                        expiringAssets: 1,
                        activatedAssets: 32,
                        activatedAssetsGrowth: '9.5%'
                    },
                    '设备': {
                        totalAssets: 158,
                        totalAssetsGrowth: '5.5%',
                        rentalRate: '68.4%',
                        rentalRateGrowth: '2.2%',
                        idleAssets: 25,
                        idleAssetsGrowth: '2.0%',
                        expiringAssets: 1,
                        activatedAssets: 12,
                        activatedAssetsGrowth: '6.7%'
                    }
                },
                quarter: {
                    all: {
                        totalAssets: 1235,
                        totalAssetsGrowth: '2.1%',
                        rentalRate: '77.8%',
                        rentalRateGrowth: '1.2%',
                        idleAssets: 272,
                        idleAssetsGrowth: '1.5%',
                        expiringAssets: 4,
                        activatedAssets: 152,
                        activatedAssetsGrowth: '3.4%'
                    },
                    '房屋建筑': {
                        totalAssets: 848,
                        totalAssetsGrowth: '1.8%',
                        rentalRate: '81.5%',
                        rentalRateGrowth: '1.3%',
                        idleAssets: 188,
                        idleAssetsGrowth: '1.2%',
                        expiringAssets: 2,
                        activatedAssets: 108,
                        activatedAssetsGrowth: '3.1%'
                    },
                    '土地': {
                        totalAssets: 232,
                        totalAssetsGrowth: '2.5%',
                        rentalRate: '75.0%',
                        rentalRateGrowth: '1.0%',
                        idleAssets: 59,
                        idleAssetsGrowth: '1.7%',
                        expiringAssets: 1,
                        activatedAssets: 31,
                        activatedAssetsGrowth: '3.6%'
                    },
                    '设备': {
                        totalAssets: 155,
                        totalAssetsGrowth: '2.0%',
                        rentalRate: '68.0%',
                        rentalRateGrowth: '0.8%',
                        idleAssets: 25,
                        idleAssetsGrowth: '1.2%',
                        expiringAssets: 1,
                        activatedAssets: 13,
                        activatedAssetsGrowth: '3.2%'
                    }
                },
                month: {
                    all: {
                        totalAssets: 1228,
                        totalAssetsGrowth: '0.8%',
                        rentalRate: '77.2%',
                        rentalRateGrowth: '0.5%',
                        idleAssets: 275,
                        expiringAssets: 3,
                        idleAssetsGrowth: '0.7%',
                        activatedAssets: 150,
                        activatedAssetsGrowth: '1.3%'
                    },
                    '房屋建筑': {
                        totalAssets: 842,
                        totalAssetsGrowth: '0.6%',
                        rentalRate: '81.0%',
                        rentalRateGrowth: '0.4%',
                        idleAssets: 190,
                        idleAssetsGrowth: '0.5%',
                        expiringAssets: 2,
                        activatedAssets: 106,
                        activatedAssetsGrowth: '1.1%'
                    },
                    '土地': {
                        totalAssets: 230,
                        totalAssetsGrowth: '0.9%',
                        rentalRate: '74.8%',
                        rentalRateGrowth: '0.3%',
                        idleAssets: 60,
                        idleAssetsGrowth: '0.8%',
                        expiringAssets: 1,
                        activatedAssets: 30,
                        activatedAssetsGrowth: '1.5%'
                    },
                    '设备': {
                        totalAssets: 156,
                        totalAssetsGrowth: '0.7%',
                        rentalRate: '67.8%',
                        rentalRateGrowth: '0.4%',
                        idleAssets: 25,
                        idleAssetsGrowth: '0.6%',
                        expiringAssets: 0,
                        activatedAssets: 14,
                        activatedAssetsGrowth: '1.2%'
                    }
                }
            };

            // 当前选中的统计周期和日期
            let currentPeriod = 'year';
            let currentYear = '2026';
            let currentQuarter = '1';
            let currentMonth = '1';
            
            // 图表数据 - 按资产类型分类
            const chartData = {
                year: {
                    '房屋': {
                        labels: ['2022年', '2023年', '2024年', '2025年', '2026年'],
                        data: [78.5, 80.2, 81.5, 81.8, 82.3]
                    },
                    '设备': {
                        labels: ['2022年', '2023年', '2024年', '2025年', '2026年'],
                        data: [62.5, 64.2, 66.8, 67.8, 68.4]
                    },
                    '土地': {
                        labels: ['2022年', '2023年', '2024年', '2025年', '2026年'],
                        data: [70.5, 72.2, 74.8, 75.3, 75.6]
                    }
                },
                quarter: {
                    '房屋': {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        data: [80.5, 81.2, 81.8, 82.0]
                    },
                    '设备': {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        data: [67.2, 67.5, 68.0, 68.5]
                    },
                    '土地': {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        data: [74.2, 74.5, 75.0, 75.5]
                    }
                },
                month: {
                    '房屋': {
                        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                        data: [80.8, 81.0, 81.2, 81.5, 81.8, 82.0]
                    },
                    '设备': {
                        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                        data: [67.8, 67.9, 68.0, 68.1, 68.2, 68.3]
                    },
                    '土地': {
                        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                        data: [74.5, 74.6, 74.7, 74.8, 74.9, 75.0]
                    }
                }
            };
            
            // 当前选中的资产类型
            let currentAssetType = '房屋';

            // 更新统计数据显示
            function updateStatistics() {
                const assetType = document.getElementById('asset-type-filter').value;
                const unit = document.getElementById('unit-filter').value;
                
                const assetTypeKey = assetType === 'all' ? 'all' : assetType;
                const data = statisticsData[currentPeriod][assetTypeKey];
                
                // 更新总资产数量
                document.querySelector('.stat-card:nth-child(1) h3').textContent = data.totalAssets.toLocaleString();
                document.querySelector('.stat-card:nth-child(1) .text-green-600 span').textContent = data.totalAssetsGrowth;
                
                // 更新出租率
                document.querySelector('.stat-card:nth-child(2) h3').textContent = data.rentalRate;
                document.querySelector('.stat-card:nth-child(2) .text-green-600 span').textContent = data.rentalRateGrowth;
                
                // 更新闲置资产
                document.querySelector('.stat-card:nth-child(3) h3').textContent = data.idleAssets;
                document.querySelector('.stat-card:nth-child(3) .text-red-600 span').textContent = data.idleAssetsGrowth;
                
                // 更新盘活资产
                document.querySelector('.stat-card:nth-child(4) h3').textContent = data.activatedAssets;
                document.querySelector('.stat-card:nth-child(4) .text-red-600 span').textContent = data.activatedAssetsGrowth;
                
                // 更新即将到期资产（实时数据，不随查询条件变化）
                document.querySelector('.stat-card:nth-child(5) h3').textContent = data.expiringAssets;
                
                // 如果选择的是全部类型，更新各类型资产的分布和增长率
                if (assetType === 'all') {
                    const buildingData = statisticsData[currentPeriod]['房屋建筑'];
                    const landData = statisticsData[currentPeriod]['土地'];
                    const equipmentData = statisticsData[currentPeriod]['设备'];
                    
                    // 更新总资产数量的各类型分布
                    document.querySelectorAll('.stat-card:nth-child(1) .space-y-1 span.text-gray-800')[0].textContent = buildingData.totalAssets.toLocaleString();
                    document.querySelectorAll('.stat-card:nth-child(1) .space-y-1 span.text-green-600')[0].textContent = `↑${buildingData.totalAssetsGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(1) .space-y-1 span.text-gray-800')[1].textContent = equipmentData.totalAssets.toLocaleString();
                    document.querySelectorAll('.stat-card:nth-child(1) .space-y-1 span.text-green-600')[1].textContent = `↑${equipmentData.totalAssetsGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(1) .space-y-1 span.text-gray-800')[2].textContent = landData.totalAssets.toLocaleString();
                    document.querySelectorAll('.stat-card:nth-child(1) .space-y-1 span.text-green-600')[2].textContent = `↑${landData.totalAssetsGrowth}`;
                    
                    // 更新出租率的各类型分布
                    document.querySelectorAll('.stat-card:nth-child(2) .space-y-1 span.text-gray-800')[0].textContent = buildingData.rentalRate;
                    document.querySelectorAll('.stat-card:nth-child(2) .space-y-1 span.text-green-600')[0].textContent = `↑${buildingData.rentalRateGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(2) .space-y-1 span.text-gray-800')[1].textContent = equipmentData.rentalRate;
                    document.querySelectorAll('.stat-card:nth-child(2) .space-y-1 span.text-green-600')[1].textContent = `↑${equipmentData.rentalRateGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(2) .space-y-1 span.text-gray-800')[2].textContent = landData.rentalRate;
                    document.querySelectorAll('.stat-card:nth-child(2) .space-y-1 span.text-green-600')[2].textContent = `↑${landData.rentalRateGrowth}`;
                    
                    // 更新闲置资产的各类型分布
                    document.querySelectorAll('.stat-card:nth-child(3) .space-y-1 span.text-gray-800')[0].textContent = buildingData.idleAssets;
                    document.querySelectorAll('.stat-card:nth-child(3) .space-y-1 span.text-red-600')[0].textContent = `↑${buildingData.idleAssetsGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(3) .space-y-1 span.text-gray-800')[1].textContent = equipmentData.idleAssets;
                    document.querySelectorAll('.stat-card:nth-child(3) .space-y-1 span.text-red-600')[1].textContent = `↑${equipmentData.idleAssetsGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(3) .space-y-1 span.text-gray-800')[2].textContent = landData.idleAssets;
                    document.querySelectorAll('.stat-card:nth-child(3) .space-y-1 span.text-red-600')[2].textContent = `↑${landData.idleAssetsGrowth}`;
                    
                    // 更新盘活资产的各类型分布
                    document.querySelectorAll('.stat-card:nth-child(4) .space-y-1 span.text-gray-800')[0].textContent = buildingData.activatedAssets;
                    document.querySelectorAll('.stat-card:nth-child(4) .space-y-1 span.text-green-600')[0].textContent = `↑${buildingData.activatedAssetsGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(4) .space-y-1 span.text-gray-800')[1].textContent = equipmentData.activatedAssets;
                    document.querySelectorAll('.stat-card:nth-child(4) .space-y-1 span.text-green-600')[1].textContent = `↑${equipmentData.activatedAssetsGrowth}`;
                    document.querySelectorAll('.stat-card:nth-child(4) .space-y-1 span.text-gray-800')[2].textContent = landData.activatedAssets;
                    document.querySelectorAll('.stat-card:nth-child(4) .space-y-1 span.text-green-600')[2].textContent = `↑${landData.activatedAssetsGrowth}`;
                    
                    // 更新即将到期资产的各类型分布
                    document.querySelectorAll('.stat-card:nth-child(5) .space-y-1 span.text-red-600')[0].textContent = buildingData.expiringAssets;
                    document.querySelectorAll('.stat-card:nth-child(5) .space-y-1 span.text-red-600')[1].textContent = equipmentData.expiringAssets;
                    document.querySelectorAll('.stat-card:nth-child(5) .space-y-1 span.text-red-600')[2].textContent = landData.expiringAssets;
                }
                
                // 更新图表数据
                updateRentalTrendChart();
            }
            
            // 更新出租率趋势图表
            function updateRentalTrendChart() {
                const currentChartData = chartData[currentPeriod][currentAssetType];
                rentalTrendChart.data.labels = currentChartData.labels;
                rentalTrendChart.data.datasets[0].data = currentChartData.data;
                rentalTrendChart.update();
            }

            // 筛选类型切换事件
            document.getElementById('filter-type').addEventListener('change', function() {
                currentPeriod = this.value;
                
                // 显示对应的日期选择器
                const yearSelect = document.getElementById('year-select');
                const quarterSelect = document.getElementById('quarter-select');
                const monthSelect = document.getElementById('month-select');
                
                yearSelect.classList.remove('hidden');
                quarterSelect.classList.add('hidden');
                monthSelect.classList.add('hidden');
                
                if (currentPeriod === 'quarter') {
                    quarterSelect.classList.remove('hidden');
                } else if (currentPeriod === 'month') {
                    monthSelect.classList.remove('hidden');
                }
                
                updateStatistics();
            });

            // 应用筛选按钮事件
            document.querySelector('.bg-blue-600.text-white').addEventListener('click', function() {
                currentYear = document.getElementById('year-select').value;
                currentQuarter = document.getElementById('quarter-select').value;
                currentMonth = document.getElementById('month-select').value;
                
                // 更新统计数据（实际应用中应该根据选择的日期获取对应数据）
                updateStatistics();
                
                // 显示筛选结果提示
                let periodText = '';
                if (currentPeriod === 'year') {
                    periodText = `${currentYear}年`;
                } else if (currentPeriod === 'quarter') {
                    periodText = `${currentYear}年第${currentQuarter}季度`;
                } else {
                    periodText = `${currentYear}年${currentMonth}月`;
                }
                
                showNotification(`已切换至${periodText}数据`);
            });

            // 显示通知
            function showNotification(message) {
                const notification = document.createElement('div');
                notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
                notification.textContent = message;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            }
            
            // 显示详细资产列表
            function showAssetDetails(type) {
                let title = '';
                let content = '';
                const periodText = currentPeriod === 'year' ? '年度' : currentPeriod === 'quarter' ? '季度' : '月度';
                
                switch(type) {
                    case 'total':
                        title = '总资产详细信息';
                        content = `
                            <div class="space-y-4">
                                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                    <h4 class="font-semibold text-blue-800 mb-2">统计范围</h4>
                                    <p class="text-sm text-blue-700">显示${currentYear}年${currentPeriod === 'quarter' ? `第${currentQuarter}季度` : currentPeriod === 'month' ? `${currentMonth}月` : ''}的所有资产信息</p>
                                </div>
                                
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">资产名称</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面积</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <div class="flex items-center">
                                                        <span>状态</span>
                                                        <span class="ml-1 text-blue-600 hover:text-blue-800 cursor-pointer" id="asset-status-column-help">
                                                            <i class="fa fa-question-circle"></i>
                                                        </span>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">出租属性</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">火车站东广场商铺</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">已出租</span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">出租</td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">客运站办公楼</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">850㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">闲置中</span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">非出租</td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">物流仓库</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1500㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">已出租</span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">出租</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="text-center text-sm text-gray-500">
                                    共显示3条记录，总计1,248项资产
                                </div>
                            </div>
                        `;
                        break;
                    
                    case 'rental':
                        title = '出租资产详细信息';
                        content = `
                            <div class="space-y-4">
                                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                                    <h4 class="font-semibold text-green-800 mb-2">统计范围</h4>
                                    <p class="text-sm text-green-700">显示${currentYear}年${currentPeriod === 'quarter' ? `第${currentQuarter}季度` : currentPeriod === 'month' ? `${currentMonth}月` : ''}的已出租资产信息</p>
                                </div>
                                
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">资产名称</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面积</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">租金</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">火车站东广场商铺</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">¥12,000/月</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">第一客运分公司</td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">物流仓库</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1500㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">¥30,000/月</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">物流分公司</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="text-center text-sm text-gray-500">
                                    共显示2条记录，出租率78.5%
                                </div>
                            </div>
                        `;
                        break;
                    
                    case 'idle':
                        title = '闲置资产详细信息';
                        content = `
                            <div class="space-y-4">
                                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                    <h4 class="font-semibold text-yellow-800 mb-2">统计范围</h4>
                                    <p class="text-sm text-yellow-700">显示${currentYear}年${currentPeriod === 'quarter' ? `第${currentQuarter}季度` : currentPeriod === 'month' ? `${currentMonth}月` : ''}的闲置资产信息（仅出租属性）</p>
                                </div>
                                
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">资产名称</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面积</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">客运站办公楼</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">850㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">第一客运分公司</td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">第二客运分公司仓库</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1200㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">第二客运分公司</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="text-center text-sm text-gray-500">
                                    共显示2条记录，总计268项闲置资产
                                </div>
                            </div>
                        `;
                        break;
                    
                    case 'expiring':
                        title = '即将到期资产详细信息';
                        content = `
                            <div class="space-y-4">
                                <div class="bg-red-50 border-l-4 border-red-500 p-4">
                                    <h4 class="font-semibold text-red-800 mb-2">统计范围</h4>
                                    <p class="text-sm text-red-700">显示合同到期前30天内的出租资产信息</p>
                                </div>
                                
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">资产名称</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面积</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">租金</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">到期时间</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">火车站东广场商铺</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥12,000/月</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-04-05</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">第一客运分公司</td>
                                            </tr>
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">站前商铺</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">80㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥8,000/月</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026-04-15</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">第一客运分公司</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="text-sm text-gray-500">
                                    共显示2条记录，总计5项即将到期资产
                                </div>
                            </div>
                        `;
                        break;
                    
                    case 'activated':
                        title = '盘活资产详细信息';
                        content = `
                            <div class="space-y-4">
                                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                                    <h4 class="font-semibold text-purple-800 mb-2">统计范围</h4>
                                    <p class="text-sm text-purple-700">显示${currentYear}年${currentPeriod === 'quarter' ? `第${currentQuarter}季度` : currentPeriod === 'month' ? `${currentMonth}月` : ''}的盘活资产信息</p>
                                </div>
                                
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">资产名称</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面积</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">盘活时间</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">公交总站商铺</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">房屋建筑</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200㎡</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">公交分公司</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2026年2月</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="text-center text-sm text-gray-500">
                                    共显示1条记录，总计20项盘活资产
                                </div>
                            </div>
                        `;
                        break;
                }
                
                showModal({
                    title: title,
                    content: content,
                    showCancelButton: true,
                    confirmButtonText: '关闭'
                });
            }

            // 模态框函数
            function showModal(options) {
                const { title, content, showCancelButton = true, confirmButtonText = '确定', cancelButtonText = '取消', onConfirm, onCancel } = options;
                
                // 创建模态框背景
                const modalOverlay = document.createElement('div');
                modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                modalOverlay.id = 'modal-overlay';
                
                // 创建模态框内容
                const modal = document.createElement('div');
                modal.className = 'bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4';
                
                // 模态框头部
                const modalHeader = document.createElement('div');
                modalHeader.className = 'border-b border-gray-200 px-6 py-4';
                modalHeader.innerHTML = `<h3 class="text-lg font-semibold text-gray-900">${title}</h3>`;
                
                // 模态框内容
                const modalBody = document.createElement('div');
                modalBody.className = 'px-6 py-4';
                modalBody.innerHTML = content;
                
                // 模态框底部
                const modalFooter = document.createElement('div');
                modalFooter.className = 'border-t border-gray-200 px-6 py-4 flex justify-end space-x-3';
                
                if (showCancelButton) {
                    const cancelButton = document.createElement('button');
                    cancelButton.className = 'px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors';
                    cancelButton.textContent = cancelButtonText;
                    cancelButton.addEventListener('click', function() {
                        document.body.removeChild(modalOverlay);
                        if (onCancel) onCancel();
                    });
                    modalFooter.appendChild(cancelButton);
                }
                
                const confirmButton = document.createElement('button');
                confirmButton.className = 'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors';
                confirmButton.textContent = confirmButtonText;
                confirmButton.addEventListener('click', function() {
                    document.body.removeChild(modalOverlay);
                    if (onConfirm) onConfirm();
                });
                modalFooter.appendChild(confirmButton);
                
                // 组装模态框
                modal.appendChild(modalHeader);
                modal.appendChild(modalBody);
                modal.appendChild(modalFooter);
                modalOverlay.appendChild(modal);
                
                // 添加到页面
                document.body.appendChild(modalOverlay);
                
                // 点击背景关闭
                modalOverlay.addEventListener('click', function(e) {
                    if (e.target === modalOverlay) {
                        document.body.removeChild(modalOverlay);
                        if (onCancel) onCancel();
                    }
                });
            }

            // 盘活资产帮助信息点击事件
            document.getElementById('activated-assets-help').addEventListener('click', function() {
                showModal({
                    title: '盘活资产说明',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <h4 class="font-semibold text-blue-800 mb-2">盘活资产定义</h4>
                                <p class="text-sm text-blue-700">盘活资产数量 = 上一周期出租属性闲置资产数量 - 本周期出租属性闲置资产数量</p>
                            </div>
                            
                            <div class="bg-green-50 border-l-4 border-green-500 p-4">
                                <h4 class="font-semibold text-green-800 mb-2">环比增长率计算</h4>
                                <p class="text-sm text-green-700">环比增长率 = (本周期出租属性盘活资产数量 - 上一周期出租属性盘活资产数量) / 上一周期出租属性盘活资产数量 × 100%</p>
                            </div>
                            
                            <div class="space-y-2">
                                <p class="text-sm font-medium text-gray-800">判断规则：</p>
                                <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                    <li>上半年出租，下半年没有出租不算盘活</li>
                                    <li>关键看统计周期结束时的状态（年底/季度末/月末）</li>
                                    <li>若周期结束时资产处于"闲置"状态，则计入本周期闲置资产数量，不算盘活</li>
                                    <li>此规则适用于年度、季度、月度统计</li>
                                </ul>
                            </div>
                            
                            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                <p class="text-sm text-yellow-700">
                                    <strong>核心要点：</strong>盘活资产以周期结束时的状态为准，而非期间的变化。
                                </p>
                            </div>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: '我知道了'
                });

            // 资产类型切换事件监听
            document.querySelectorAll('.asset-type-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    const assetType = this.dataset.type;
                    
                    // 更新当前选中的资产类型
                    currentAssetType = assetType;
                    
                    // 更新标签样式
                    document.querySelectorAll('.asset-type-tab').forEach(t => {
                        t.classList.remove('bg-blue-600', 'text-white');
                        t.classList.add('bg-gray-100', 'text-gray-700');
                    });
                    this.classList.remove('bg-gray-100', 'text-gray-700');
                    this.classList.add('bg-blue-600', 'text-white');
                    
                    // 更新图表数据
                    updateRentalTrendChart();
                });
            });
            
            // 即将到期资产类型筛选事件
            document.getElementById('expiring-asset-type-filter').addEventListener('change', function() {
                const selectedType = this.value;
                const rows = document.querySelectorAll('#expiring-assets-table tbody tr');
                
                rows.forEach(row => {
                    const typeSpan = row.querySelector('span[class*="rounded-full"]');
                    const assetType = typeSpan.textContent.trim();
                    
                    if (selectedType === 'all' || assetType === selectedType) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });

            // 闲置资产帮助信息点击事件
            document.getElementById('idle-assets-help').addEventListener('click', function() {
                showModal({
                    title: '闲置资产说明',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <h4 class="font-semibold text-blue-800 mb-2">闲置资产定义</h4>
                                <p class="text-sm text-blue-700">闲置资产数量 = 出租属性且状态为"闲置中"的资产数量</p>
                            </div>
                            
                            <div class="bg-green-50 border-l-4 border-green-500 p-4">
                                <h4 class="font-semibold text-green-800 mb-2">环比增长率计算</h4>
                                <p class="text-sm text-green-700">环比增长率 = (本周期闲置资产数量 - 上一周期闲置资产数量) / 上一周期闲置资产数量 × 100%</p>
                            </div>
                            
                            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                <p class="text-sm text-yellow-700">
                                    <strong>统计范围：</strong>仅统计具有"出租"属性的闲置资产，非出租属性的资产不计入闲置资产统计。
                                </p>
                            </div>
                            
                            <div class="space-y-2">
                                <p class="text-sm font-medium text-gray-800">说明：</p>
                                <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                    <li>闲置资产是盘活资产计算的基础数据</li>
                                    <li>盘活资产数量 = 上一周期闲置资产数量 - 本周期闲置资产数量</li>
                                    <li>闲置资产增加表示资产利用率下降，需关注</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: '我知道了'
                });
            });

            // 即将到期资产帮助信息点击事件
            document.getElementById('expiring-assets-help').addEventListener('click', function() {
                showModal({
                    title: '即将到期资产说明',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <h4 class="font-semibold text-blue-800 mb-2">即将到期资产定义</h4>
                                <p class="text-sm text-blue-700">即将到期资产数量 = 出租属性且到期时间在30天内的资产数量</p>
                            </div>
                            
                            <div class="bg-red-50 border-l-4 border-red-500 p-4">
                                <h4 class="font-semibold text-red-800 mb-2">预警规则</h4>
                                <ul class="list-disc list-inside text-sm text-red-700 space-y-2">
                                    <li>合同到期前30天开始预警</li>
                                    <li>已标记不续签的资产仍显示预警，但状态为"已处理"</li>
                                    <li>预警资产需及时处理（续签或不续签）</li>
                                </ul>
                            </div>
                            
                            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                <p class="text-sm text-yellow-700">
                                    <strong>处理方式：</strong>可通过资产列表的"续签"或"不续签"按钮进行处理。
                                </p>
                            </div>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: '我知道了'
                });

            // 出租率帮助信息点击事件
            document.getElementById('rental-rate-help').addEventListener('click', function() {
                showModal({
                    title: '出租率说明',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <h4 class="font-semibold text-blue-800 mb-2">出租率定义</h4>
                                <p class="text-sm text-blue-700">出租率 = 已出租资产数量 ÷ 总资产数量 × 100%</p>
                            </div>
                            
                            <div class="bg-green-50 border-l-4 border-green-500 p-4">
                                <h4 class="font-semibold text-green-800 mb-2">环比增长计算</h4>
                                <p class="text-sm text-green-700">环比增长 = 本周期出租率 - 上一周期出租率</p>
                                <p class="text-sm text-green-700 mt-1">注：出租率环比增长以"百分点"为单位</p>
                            </div>
                            
                            <div class="space-y-2">
                                <p class="text-sm font-medium text-gray-800">说明：</p>
                                <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                    <li>已出租资产：状态为"已出租"的资产</li>
                                    <li>总资产数量：所有具有"出租"属性的资产总数</li>
                                    <li>出租率反映资产利用效率，越高越好</li>
                                    <li>环比增长为正表示资产利用率提升</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: '我知道了'
                });

            // 总资产数量帮助信息点击事件
            document.getElementById('total-assets-help').addEventListener('click', function() {
                showModal({
                    title: '总资产数量说明',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <h4 class="font-semibold text-blue-800 mb-2">总资产数量定义</h4>
                                <p class="text-sm text-blue-700">总资产数量 = 各单位资产数量总和</p>
                            </div>
                            
                            <div class="bg-green-50 border-l-4 border-green-500 p-4">
                                <h4 class="font-semibold text-green-800 mb-2">环比增长率计算</h4>
                                <p class="text-sm text-green-700">环比增长率 = (本周期总资产数量 - 上一周期总资产数量) / 上一周期总资产数量 × 100%</p>
                            </div>
                            
                            <div class="space-y-2">
                                <p class="text-sm font-medium text-gray-800">说明：</p>
                                <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                    <li>统计所有单位的资产数量总和</li>
                                    <li>不分出租属性，包含所有类型的资产</li>
                                    <li>反映公司整体资产规模</li>
                                    <li>环比增长为正表示资产规模扩大</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: '我知道了'
                });

            // 资产状态分布帮助信息点击事件
            document.getElementById('asset-status-help').addEventListener('click', function() {
                showModal({
                    title: '资产状态分布说明',
                    content: `
                        <div class="space-y-4">
                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <h4 class="font-semibold text-blue-800 mb-2">数据说明</h4>
                                <p class="text-sm text-blue-700">本图表展示的是实时的、当前状态的资产分布情况</p>
                            </div>
                            
                            <div class="space-y-2">
                                <p class="text-sm font-medium text-gray-800">状态分类：</p>
                                <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                    <li><span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>已出租：当前处于出租状态的资产</li>
                                    <li><span class="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>闲置中：当前未出租且可出租的资产</li>
                                    <li><span class="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>维修中：正在维修无法使用的资产</li>
                                    <li><span class="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>自用：公司内部使用的资产</li>
                                </ul>
                            </div>
                            
                            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                <p class="text-sm text-yellow-700">
                                    <strong>注意：</strong>本数据不随时间周期筛选变化，始终显示当前最新的资产状态分布。
                                </p>
                            </div>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: '我知道了'
                });

            // 状态列帮助信息点击事件（委托事件，因为元素是动态生成的）
            document.addEventListener('click', function(e) {
                if (e.target.closest('#asset-status-column-help')) {
                    showModal({
                        title: '资产状态说明',
                        content: `
                            <div class="space-y-4">
                                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                    <h4 class="font-semibold text-blue-800 mb-2">状态定义</h4>
                                    <p class="text-sm text-blue-700">以下是资产状态的详细说明，基于当前所选时间段的数据</p>
                                </div>
                                
                                <div class="space-y-2">
                                    <p class="text-sm font-medium text-gray-800">状态分类：</p>
                                    <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                        <li><span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>已出租：在所选时间段内处于出租状态的资产</li>
                                        <li><span class="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>闲置中：在所选时间段内未出租且可出租的资产</li>
                                        <li><span class="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>维修中：在所选时间段内正在维修无法使用的资产</li>
                                        <li><span class="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>自用：在所选时间段内公司内部使用的资产</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                    <p class="text-sm text-yellow-700">
                                        <strong>注意：</strong>此处显示的状态是所选时间段（如2026年）的历史状态，而非当前实时状态。
                                    </p>
                                </div>
                            </div>
                        `,
                        showCancelButton: false,
                        confirmButtonText: '我知道了'
                    });
                } else if (e.target.closest('#asset-status-realtime-help')) {
                    showModal({
                        title: '资产实时状态说明',
                        content: `
                            <div class="space-y-4">
                                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                                    <h4 class="font-semibold text-blue-800 mb-2">状态定义</h4>
                                    <p class="text-sm text-blue-700">以下是资产实时状态的详细说明</p>
                                </div>
                                
                                <div class="space-y-2">
                                    <p class="text-sm font-medium text-gray-800">状态分类：</p>
                                    <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                                        <li><span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>已出租：当前处于出租状态的资产</li>
                                        <li><span class="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>闲置中：当前未出租且可出租的资产</li>
                                        <li><span class="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>维修中：当前正在维修无法使用的资产</li>
                                        <li><span class="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>自用：当前公司内部使用的资产</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                                    <p class="text-sm text-green-700">
                                        <strong>注意：</strong>此处显示的是资产的实时状态，反映当前最新的资产状态信息。
                                    </p>
                                </div>
                            </div>
                        `,
                        showCancelButton: false,
                        confirmButtonText: '我知道了'
                    });
                }
            });

            // 为统计卡片添加点击事件
            document.querySelector('.stat-card:nth-child(1)').addEventListener('click', function(e) {
                if (!e.target.closest('#total-assets-help')) {
                    showAssetDetails('total');
                }
            });
            
            document.querySelector('.stat-card:nth-child(2)').addEventListener('click', function(e) {
                if (!e.target.closest('#rental-rate-help')) {
                    showAssetDetails('rental');
                }
            });
            
            document.querySelector('.stat-card:nth-child(3)').addEventListener('click', function(e) {
                if (!e.target.closest('#idle-assets-help')) {
                    showAssetDetails('idle');
                }
            });
            
            document.querySelector('.stat-card:nth-child(4)').addEventListener('click', function(e) {
                if (!e.target.closest('#activated-assets-help')) {
                    showAssetDetails('activated');
                }
            });
            
            document.querySelector('.stat-card:nth-child(5)').addEventListener('click', function(e) {
                if (!e.target.closest('#expiring-assets-help')) {
                    showAssetDetails('expiring');
                }
            });

            // 声明图表变量
            let rentalTrendChart;
            let assetStatusChart;
            
            // 初始化图表
            setTimeout(function() {
                try {
                    const rentalTrendCtx = document.getElementById('rentalTrendChart').getContext('2d');
                    rentalTrendChart = new Chart(rentalTrendCtx, {
                        type: 'line',
                        data: {
                            labels: chartData.year[currentAssetType].labels,
                            datasets: [{
                                label: '出租率',
                                data: chartData.year[currentAssetType].data,
                                borderColor: '#3b82f6',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                tension: 0.4,
                                fill: true
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: false,
                                    min: 60,
                                    max: 90,
                                    ticks: {
                                        callback: function(value) {
                                            return value + '%';
                                        }
                                    }
                                }
                            }
                        }
                    });

                    const assetStatusCtx = document.getElementById('assetStatusChart').getContext('2d');
                    assetStatusChart = new Chart(assetStatusCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['已出租', '闲置中', '维修中', '自用'],
                            datasets: [{
                                data: [78.5, 20.5, 0.8, 0.2],
                                backgroundColor: [
                                    '#10b981',
                                    '#f59e0b',
                                    '#ef4444',
                                    '#6b7280'
                                ],
                                borderWidth: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        boxWidth: 12,
                                        padding: 15
                                    }
                                }
                            },
                            cutout: '70%'
                        }
                    });
                } catch (error) {
                    console.error('图表初始化失败:', error);
                }
            }, 100);
        });
    