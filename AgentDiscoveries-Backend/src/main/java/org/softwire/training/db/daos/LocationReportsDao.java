package org.softwire.training.db.daos;

import org.apache.commons.text.WordUtils;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.statement.Query;
import org.softwire.training.db.daos.searchcriteria.ReportSearchCriterion;
import org.softwire.training.models.LocationStatusReport;

import javax.inject.Inject;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class LocationReportsDao implements ReportsDao<LocationStatusReport> {

    @Inject
    Jdbi jdbi;

    public Optional<LocationStatusReport> getReport(int reportId) {
        try (Handle handle = jdbi.open()) {
            return handle.createQuery("SELECT * FROM location_reports WHERE report_id = :report_id")
                    .bind("report_id", reportId)
                    .mapToBean(LocationStatusReport.class)
                    .findFirst();
        }
    }

    public int createReport(LocationStatusReport report) {
        try (Handle handle = jdbi.open()) {
            return handle.createUpdate("INSERT INTO location_reports (report_title, location_id, agent_id, status, report_time, report_body, attachment)" +
                    " VALUES (:report_title, :location_id, :agent_id, :status, :report_time, :report_body, :attachment)")
                    .bind("report_title", WordUtils.capitalizeFully(report.getReportTitle()))
                    .bind("location_id", report.getLocationId())
                    .bind("agent_id", report.getAgentId())
                    .bind("status", report.getStatus())
                    .bind("report_time", report.getReportTime())
                    .bind("report_body", report.getReportBody())
                    .bind("attachment", report.getAttachment())
                    .executeAndReturnGeneratedKeys("report_id")
                    .mapTo(Integer.class)
                    .findOnly();
        }
    }

    public void deleteReport(int report_id) {
        try (Handle handle = jdbi.open()) {
            handle.createUpdate("DELETE FROM location_reports WHERE report_id = :report_id")
                    .bind("report_id", report_id)
                    .execute();
        }
    }

    public List<LocationStatusReport> searchReports(List<ReportSearchCriterion> searchCriteria) {
        String whereClause = ReportsDaoUtils.buildWhereSubClauseFromCriteria(searchCriteria);

        try (Handle handle = jdbi.open()) {
             Query query = handle.createQuery("SELECT report_title, agents.agent_id, location_id, report_body, report_id, status, report_time, attachment " +
             "FROM location_reports location LEFT JOIN agents ON agents.agent_id = location.agent_id" + whereClause);

             for (ReportSearchCriterion criterion : searchCriteria) {
                 for (Map.Entry<String, Object> bindingEntry : criterion.getBindingsForSql().entrySet()) {
                     query.bind(bindingEntry.getKey(), bindingEntry.getValue());
                 }
             }

             return query.mapToBean(LocationStatusReport.class).list();
        }
    }
}
