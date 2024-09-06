package com.ezystore.usuarios.controller;

import com.ezystore.configs.TokenGenerate;
import com.ezystore.usuarios.dto.AuthDto;
import com.ezystore.usuarios.dto.TokenDto;
import com.ezystore.usuarios.entity.UsuarioEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    TokenGenerate tokenGenerate;

    AuthenticationManager authenticationManager;

    public AuthController(TokenGenerate tokenGenerate, AuthenticationManager authenticationManager) {
        this.tokenGenerate = tokenGenerate;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthDto data) {
        var usernameSenha = new UsernamePasswordAuthenticationToken(data.username(), data.senha());
        var auth = authenticationManager.authenticate(usernameSenha);

        TokenDto tokenDto = new TokenDto(tokenGenerate.GenerateToken((UsuarioEntity) auth.getPrincipal()));

        return tokenDto.token();
    }

}
