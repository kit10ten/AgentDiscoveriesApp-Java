package org.softwire.training.db.daos;

import javax.inject.Inject;
import org.jdbi.v3.core.Jdbi;

import java.util.List;
import org.jdbi.v3.core.Handle;

import org.softwire.training.models.acceptableTimezones;

public class acceptableTimezonesDao {
    

    @Inject
    Jdbi jdbi;

    // Adding other CRUD elements like create, update and delete is optional
    // because I will most likely just populate the whole db myself(oscar)
    // with a migration file most likely

    public List<acceptableTimezones> getTimeZones(String validTimezones) {
        try(Handle handle = jdbi.open()) {
            return handle.createQuery("SELECT * FROM acceptableTimezones")
                .mapToBean(acceptableTimezones.class)
                .list();
        }
    }
    
}
