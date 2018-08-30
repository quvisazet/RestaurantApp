package formation.restaurant.model;

import javax.persistence.*;

@Entity
public class PlatType {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_plat")
    private Plat plat;

    private String name;

    public PlatType(Plat plat, String name) {
        this.plat = plat;
        this.name = name;
    }

    public Plat getPlat() {
        return plat;
    }

    public void setPlat(Plat plat) {
        this.plat = plat;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
