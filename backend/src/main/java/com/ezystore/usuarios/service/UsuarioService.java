package com.ezystore.usuarios.service;

import com.ezystore.usuarios.dto.UsuarioDto;
import com.ezystore.usuarios.entity.UsuarioEntity;
import com.ezystore.usuarios.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {

    private UsuarioRepository usuarioRepository;

    public UsuarioService (UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    public UsuarioDto criarUsuario (UsuarioDto usuario) {

        var verificarUsuarioExistente = usuarioRepository.findByUsername(usuario.username());

        if (verificarUsuarioExistente != null){
            throw new RuntimeException("Usuário já existe!");
        }

        var passwordHash = new BCryptPasswordEncoder().encode(usuario.senha());

        UsuarioEntity usuarioEntity = new UsuarioEntity();
        usuarioEntity.setNome(usuario.nome());
        usuarioEntity.setSenha(passwordHash);
        usuarioEntity.setUsername(usuario.username());

        UsuarioEntity usuarioSalvo = usuarioRepository.save(usuarioEntity);

        return new UsuarioDto(usuarioSalvo.getId(), usuarioSalvo.getNome(), usuarioSalvo.getSenha(), usuarioSalvo.getUsername());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usuarioRepository.findByUsername(username);
    }
}
