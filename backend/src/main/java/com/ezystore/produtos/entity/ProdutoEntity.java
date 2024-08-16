package com.ezystore.produtos.entity;

import com.ezystore.produtos.dto.ProdutoDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "TB_PRODUTOS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class ProdutoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "preco")
    private double preco;

    @Column (name = "imagemURL")
    private String imagemUrl;

    @Column (name = "tipoProduto", nullable = false)
    private String tipoProduto;


    public ProdutoEntity(ProdutoDto produto) {
        this.id = produto.id();
        this.nome = produto.nome();
        this.preco = produto.preco();
        this.imagemUrl = produto.imagemUrl();
        this.tipoProduto = produto.tipoProduto();
    }

    public ProdutoEntity(Long id) {
        this.id = id;
    }
}
