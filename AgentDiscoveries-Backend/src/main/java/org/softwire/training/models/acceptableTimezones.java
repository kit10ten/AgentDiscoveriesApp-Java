package org.softwire.training.models;

public class acceptableTimezones {
    
    private String validTimezones;

    public acceptableTimezones() {}

    public acceptableTimezones(String validTimezones){
        this.validTimezones = validTimezones;
    }

    public String getValidTimezones() {
        return validTimezones;
    }

    public void setValidTimezones(String validTimezones) {
        this.validTimezones = validTimezones;
    }

}
