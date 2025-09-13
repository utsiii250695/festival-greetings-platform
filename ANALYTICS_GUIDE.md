# 📊 Analytics User Guide
**Festival Greetings Platform**

## Quick Start

### 1. Access Analytics Dashboard
Open your browser and navigate to:
```
http://localhost:3000/admin/analytics
```

### 2. Choose Your Timeframe
Select from the top-right corner:
- **Last 24h** - Recent activity
- **Last 7 days** - Weekly trends (default)
- **Last 30 days** - Monthly overview
- **Last 90 days** - Quarterly analysis

---

## 📈 Dashboard Overview

### Key Metrics Cards

#### 👥 **Total Sessions**
- Number of unique visitors
- Each user gets one session ID
- Shows overall platform reach

#### 🎨 **Cards Generated**
- Total greeting cards created
- Shows conversion rate % (sessions → completed cards)
- Indicates user engagement success

#### ⬇️ **Downloads**
- Number of card downloads
- Shows download rate % (cards created → downloaded)
- Measures final conversion

#### 👀 **Page Views**
- Total page interactions across the platform
- Includes all navigation and page loads

### Funnel Metrics

#### 🌍 **Language Selections**
- Users who chose a language on homepage
- First step in user journey

#### 🎊 **Festival Selections**
- Users who picked a specific festival
- Second step in conversion funnel

#### 🖼️ **Template Selections**
- Users who chose a template design
- Third step toward card creation

---

## 🎯 Popular Content Analysis

### 🎉 Popular Festivals
- Top 5 most selected festivals
- Ranked by selection count
- Helps identify trending celebrations

### 🎨 Popular Templates
- Top 5 most used templates
- Shows design preferences
- Guides template development priorities

---

## 📊 Daily Activity Chart

### What It Shows
- Daily breakdown of key activities
- **Visits**: Page views per day
- **Cards Created**: Completed greetings per day
- **Downloads**: Downloaded cards per day

### How to Use
- Identify peak usage days
- Spot trends and patterns
- Plan content releases around high-activity periods

---

## 🔍 Understanding Your Data

### Conversion Rates

#### **Overall Conversion Rate**
```
Cards Generated ÷ Total Sessions × 100
```
- **Good**: 15-25%
- **Excellent**: 25%+
- Shows how many visitors complete the full journey

#### **Download Rate**
```
Downloads ÷ Cards Generated × 100
```
- **Good**: 70-85%
- **Excellent**: 85%+
- Shows satisfaction with created cards

### User Journey Analysis

1. **Homepage** → Language Selection
2. **Festival Page** → Festival Selection
3. **Template Gallery** → Template Selection
4. **Message Editor** → Customization
5. **Preview** → Card Generation → Download

**Track drop-offs at each step to identify improvement areas**

---

## 📱 Real-World Usage Examples

### Scenario 1: Festival Performance
**Question**: "Which festival is most popular this Diwali season?"

**Steps**:
1. Set timeframe to "Last 30 days"
2. Check "Popular Festivals" section
3. Look for Diwali-related festivals in top rankings

### Scenario 2: Template Optimization
**Question**: "Should we create more templates like the popular ones?"

**Steps**:
1. Review "Popular Templates" section
2. Note design patterns of top templates
3. Check download rates for these templates
4. Create similar designs for underperforming festivals

### Scenario 3: User Experience Issues
**Question**: "Why is our conversion rate low?"

**Steps**:
1. Compare funnel metrics:
   - Language Selections → Festival Selections
   - Festival Selections → Template Selections
   - Template Selections → Cards Generated
2. Identify biggest drop-off point
3. Focus improvements on that step

### Scenario 4: Content Planning
**Question**: "When should we launch our new festival templates?"

**Steps**:
1. Check "Daily Activity" chart
2. Identify peak activity days/times
3. Schedule releases during high-traffic periods

---

## 🛠️ Advanced Tips

### Data Refresh
- Dashboard updates automatically when you change timeframes
- Data is real-time - no manual refresh needed

### Peak Performance Indicators

#### **Healthy Platform Signs**:
- Conversion rate > 20%
- Download rate > 80%
- Steady or growing daily activity
- Diverse festival popularity (not just one festival dominating)

#### **Areas for Improvement**:
- Conversion rate < 15%
- Large drops between funnel steps
- Very low template diversity in popular list
- Declining daily activity trends

### Seasonal Analysis
- Use 90-day view during festival seasons
- Compare year-over-year during same festivals
- Track how new festivals perform vs established ones

---

## 🚀 Quick Actions Based on Data

### If Conversion Rate is Low:
1. Check which funnel step has biggest drop-off
2. Simplify that step's user interface
3. Add more template options for popular festivals

### If Download Rate is Low:
1. Review popular templates vs low-download templates
2. Improve preview quality/accuracy
3. Add more customization options

### If Certain Festivals Underperform:
1. Check if templates are culturally appropriate
2. Add more template variety for those festivals
3. Improve default messages for those celebrations

### If Daily Activity is Declining:
1. Check for technical issues
2. Plan marketing around popular festivals
3. Add new features to re-engage users

---

## 📞 Getting More Help

For technical issues or feature requests:
- Check the codebase documentation
- Review analytics API at: `/api/analytics/summary`
- Contact the development team

---

**Last Updated**: Current
**Dashboard Location**: `http://localhost:3000/admin/analytics`
**API Endpoint**: `http://localhost:3000/api/analytics/summary`