-- Flush Analytics Data
-- Run this script in your Supabase SQL editor to clear all analytics data

-- First, show current count
SELECT 'Before flush - Total records:' as status, COUNT(*) as count
FROM user_interactions;

-- Show breakdown by action type
SELECT 'Current data breakdown:' as info, action, COUNT(*) as count
FROM user_interactions
GROUP BY action
ORDER BY count DESC;

-- Delete all analytics data
DELETE FROM user_interactions;

-- Verify deletion
SELECT 'After flush - Total records:' as status, COUNT(*) as count
FROM user_interactions;

-- Reset the sequence (optional - this resets the auto-increment ID back to 1)
-- Uncomment the line below if you want to reset the ID sequence
-- ALTER SEQUENCE user_interactions_id_seq RESTART WITH 1;

SELECT 'Analytics data successfully flushed!' as result;