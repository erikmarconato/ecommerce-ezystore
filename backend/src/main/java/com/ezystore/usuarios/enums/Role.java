package com.ezystore.usuarios.enums;

import lombok.Getter;

@Getter
public enum Role {

    User("User"),
    Admin("Admin");

    private final String role;

    Role(String role) {
        this.role = role;
    }
}
