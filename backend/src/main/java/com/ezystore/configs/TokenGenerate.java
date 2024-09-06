package com.ezystore.configs;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.ezystore.usuarios.entity.UsuarioEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenGenerate {

    public String GenerateToken (UsuarioEntity user){
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            String token = JWT.create()
                    .withIssuer("ezystore")
                    .withSubject(user.getUsername())
                    .withExpiresAt(tokenExpiracao())
                    .sign(algorithm);

            return token;
        } catch (JWTCreationException exception){
            throw new RuntimeException("Erro ao gerar o token", exception);
        }
    }

    public String validacaoToken (String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            return JWT.require(algorithm)
                    .withIssuer("ezystore")
                    .build()
                    .verify(token)
                    .getSubject();
        }catch (JWTVerificationException exception){
            return "";
        }
    }

    private Instant tokenExpiracao(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
