SELECT count(*)
    INTO @exist
    FROM information_schema.columns
    WHERE table_schema = 'agentdiscoveries'
    and COLUMN_NAME = 'report_title'
    AND table_name = 'location_reports' LIMIT 1;

set @query = IF(@exist <= 0, 'ALTER TABLE agentdiscoveries.`location_reports` ADD COLUMN `report_title` varchar(255) NOT NULL','select \'Column Exists\' status');

prepare stmt from @query;

EXECUTE stmt;
