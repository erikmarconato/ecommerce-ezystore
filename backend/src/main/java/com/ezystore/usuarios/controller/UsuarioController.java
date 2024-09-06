package com.ezystore.usuarios.controller;

import com.ezystore.usuarios.dto.UsuarioDto;
import com.ezystore.usuarios.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioController {

    private UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public UsuarioDto criarUsuario (@RequestBody UsuarioDto usuarioDto){
        return usuarioService.criarUsuario(usuarioDto);
    }
}
