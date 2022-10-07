create table acceptableTimezones(
    validTimezones VARCHAR(255) FOREIGN KEY validTimezones (validTimezones) REFERENCES locations(time_zones)
);